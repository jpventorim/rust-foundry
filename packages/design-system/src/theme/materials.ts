// Small deterministic vector textures. No images, network requests, or runtime effects.
function texture(svg: string) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const ironNoise = texture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".82" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".17"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(#grain)"/><g fill="#101719" opacity=".4"><circle cx="13" cy="21" r="1.1"/><circle cx="78" cy="41" r=".8"/><circle cx="141" cy="113" r="1.2"/><circle cx="52" cy="138" r=".9"/><circle cx="100" cy="81" r="1"/></g></svg>',
);
const paperNoise = texture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".56" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".10"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(#grain)"/><g stroke="#705334" stroke-width=".7" opacity=".15"><path d="m12 27 8-3m48 19 11 1m42 37 6-2m-90 69 9-1m84-13 8 1"/></g></svg>',
);
const woodGrain = texture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="160" viewBox="0 0 320 160"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".012 .22" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".14"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(#grain)"/><g fill="none" stroke="#1d100b" opacity=".28"><path d="M-20 18Q65 9 150 20T340 14M-20 25Q65 15 150 27T340 20M-20 54Q70 65 128 51T340 52M-20 60Q70 71 128 57T340 58M-20 107Q50 91 120 109T340 100M-20 113Q50 97 120 115T340 106M-20 145Q100 132 190 147T340 140"/><ellipse cx="215" cy="82" rx="32" ry="10"/><ellipse cx="215" cy="82" rx="22" ry="6"/><ellipse cx="215" cy="82" rx="9" ry="2"/></g></svg>',
);

const canvasGrain = texture(
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="160"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".014 .15" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".055"/></feComponentTransfer></filter><rect width="100%" height="100%" filter="url(#grain)"/><g fill="none" stroke="#32271c" stroke-width=".6" opacity=".065"><path d="M-10 23Q85 16 175 25T330 22M-10 67Q95 74 190 65T330 68M-10 119Q80 111 180 122T330 117"/></g></svg>',
);

export const materialTokens = {
  "--rf-wood-grain": woodGrain,
  "--rf-iron-grain": ironNoise,
  "--rf-paper-grain": paperNoise,
  "--rf-canvas-texture": `${canvasGrain}, var(--rf-canvas)`,
  "--rf-wood-texture": `${woodGrain}, var(--rf-wood-color)`,
  "--rf-iron-texture": `${ironNoise}, var(--rf-iron-color)`,
  "--rf-paper-texture": `${paperNoise}, var(--rf-paper)`,
  "--rf-gold-texture": `${ironNoise}, linear-gradient(125deg, #f3d17a, #d7aa45 70%, #c39435)`,
  "--rf-wood-ink": "#fff0d2",
  "--rf-iron-ink": "#fff4df",
};
