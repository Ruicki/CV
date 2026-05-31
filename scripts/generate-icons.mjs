import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "../public");

// SVG base del icono RP
function makeSVG(size, fontSize, radius) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" rx="${radius}" fill="#0a1628"/>
      <text
        x="${size / 2}"
        y="${size / 2 + fontSize * 0.38}"
        font-family="Arial, sans-serif"
        font-size="${fontSize}"
        font-weight="bold"
        fill="#c9a84c"
        text-anchor="middle"
      >RP</text>
    </svg>
  `);
}

// favicon 32x32
await sharp(makeSVG(32, 14, 6))
  .png()
  .toFile(resolve(publicDir, "favicon-32.png"));
console.log("✓ favicon-32.png");

// favicon 16x16
await sharp(makeSVG(16, 8, 3))
  .png()
  .toFile(resolve(publicDir, "favicon-16.png"));
console.log("✓ favicon-16.png");

// apple touch icon 180x180
await sharp(makeSVG(180, 80, 36))
  .png()
  .toFile(resolve(publicDir, "apple-touch-icon.png"));
console.log("✓ apple-touch-icon.png");

console.log("Done!");
