import { expect, test } from "@rstest/core";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

test("renders the app and greeting form without a Tauri runtime", () => {
  const html = renderToStaticMarkup(<App />);

  expect(html).toContain("Welcome to Tauri + React");
  expect(html).toContain('placeholder="Enter a name..."');
  expect(html).toContain('type="submit"');
  expect(html).toContain("Greet</button>");
});
