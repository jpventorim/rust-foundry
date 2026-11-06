import { createReadStream, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createServer, type Server } from "node:http";
import { extname, resolve, sep } from "node:path";
import { afterAll, beforeAll, expect, test } from "@rstest/core";
import axe from "axe-core";
import { type Browser, chromium, type Page } from "playwright";

declare global {
  interface Window {
    __foundryAxe: typeof axe;
  }
}

const root = resolve("storybook-static");
type StoryEntry = { id: string; type: string; name: string; title: string };
const entries = Object.values(
  JSON.parse(readFileSync(resolve(root, "index.json"), "utf8")).entries,
) as StoryEntry[];
const mime: Record<string, string> = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

export async function audit(page: Page) {
  if (!(await page.evaluate(() => Boolean(window.__foundryAxe)))) {
    // Keep our axe instance separate from Storybook's accessibility addon.
    await page.addScriptTag({
      content: `(() => { const previous = window.axe; ${axe.source}; window.__foundryAxe = window.axe; window.axe = previous; })();`,
    });
  }
  await page.evaluate(
    () =>
      new Promise<void>((done) =>
        requestAnimationFrame(() => requestAnimationFrame(() => done())),
      ),
  );
  const violations = await page.evaluate(async () =>
    (await window.__foundryAxe.run(document)).violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.map((node) => ({
        html: node.html,
        summary: node.failureSummary,
      })),
    })),
  );
  expect(violations).toEqual([]);
}

export function componentTests(
  prefix: string,
  interactions: Record<string, (page: Page) => Promise<void>> = {},
  defaultStory = "default",
) {
  const stories = entries.filter(
    (entry) => entry.type === "story" && entry.id.startsWith(`${prefix}--`),
  );
  if (!stories.length)
    throw new Error(
      `No stories found for ${prefix}. Build Storybook before testing.`,
    );
  let browser: Browser | undefined;
  let server: Server | undefined;
  let baseUrl: string;

  beforeAll(async () => {
    server = createServer((request, response) => {
      const path = resolve(
        root,
        `.${decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname === "/" ? "/index.html" : new URL(request.url ?? "/", "http://localhost").pathname)}`,
      );
      if (!path.startsWith(`${root}${sep}`) || !existsSync(path)) {
        response.writeHead(404);
        response.end();
        return;
      }
      response.setHeader(
        "Content-Type",
        mime[extname(path)] ?? "application/octet-stream",
      );
      createReadStream(path).pipe(response);
    });
    await new Promise<void>((resolveReady, reject) => {
      server?.once("error", reject);
      server?.listen(0, "127.0.0.1", resolveReady);
    });
    const address = server.address();
    if (!address || typeof address === "string")
      throw new Error("Failed to bind Storybook test server");
    baseUrl = `http://127.0.0.1:${address.port}`;
    browser = await chromium.launch({ headless: true });
  });
  afterAll(async () => {
    await browser?.close();
    await new Promise<void>((resolveClosed, reject) => {
      if (server?.listening)
        server.close((error) => (error ? reject(error) : resolveClosed()));
      else resolveClosed();
    });
  });

  async function withStory(
    id: string,
    check: (page: Page) => Promise<void>,
    theme: "light" | "dark",
  ) {
    if (!browser) throw new Error("Browser not initialized");
    const context = await browser.newContext({
      viewport: { width: 1100, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    try {
      await page.goto(
        `${baseUrl}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`,
      );
      await page.locator(".rf-story").waitFor({ state: "visible" });
      await check(page);
      expect(errors).toEqual([]);
    } finally {
      if (process.env.RF_CAPTURE_STORIES) {
        mkdirSync(`test-results/stories/${theme}`, { recursive: true });
        await page.screenshot({
          path: `test-results/stories/${theme}/${id}.png`,
          fullPage: true,
        });
      }
      await context.close();
    }
  }

  for (const theme of ["light", "dark"] as const) {
    for (const story of stories) {
      test(`${story.title} / ${story.name} / ${theme}: axe accessibility`, async () => {
        await withStory(story.id, audit, theme);
      });
    }
    for (const [name, interaction] of Object.entries(interactions)) {
      test(`${name} / ${theme}`, async () => {
        await withStory(
          `${prefix}--${defaultStory}`,
          async (page) => {
            await interaction(page);
            await audit(page);
          },
          theme,
        );
      });
    }
  }
}
