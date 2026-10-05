// Captura de pantalla de los proyectos para el portafolio.
//
// Guarda public/projects/<slug>/desktop.webp (1440x900) y mobile.webp (390x844).
//
// Uso:
//   node scripts/screenshots.mjs                          -> sitios en vivo (DEFAULT_TARGETS)
//   node scripts/screenshots.mjs sca=http://localhost:3001 -> uno o varios slug=url
//
// Opciones:
//   --state <archivo>   storageState de Playwright (sesión ya iniciada)
//   --only desktop|mobile
//   --wait <ms>         espera extra antes de capturar (por defecto 1500)
//
// Importante: los proyectos de cliente se capturan SOLO con datos ficticios.

import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const DEFAULT_TARGETS = {
    "finanzas-maestras": "https://finanzas-maestras.vercel.app/",
    visualmind: "https://visualmind-one.vercel.app/",
};

const VIEWPORTS = {
    desktop: { width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false },
    mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

function parseArgs(argv) {
    const opts = { targets: {}, state: undefined, only: undefined, wait: 1500 };
    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i];
        if (arg === "--state") opts.state = argv[++i];
        else if (arg === "--only") opts.only = argv[++i];
        else if (arg === "--wait") opts.wait = Number(argv[++i]);
        else if (arg.includes("=")) {
            const [slug, ...rest] = arg.split("=");
            opts.targets[slug] = rest.join("=");
        }
    }
    if (Object.keys(opts.targets).length === 0) opts.targets = DEFAULT_TARGETS;
    return opts;
}

const opts = parseArgs(process.argv.slice(2));
const browser = await chromium.launch({
    // En entornos con Chromium preinstalado (p. ej. /opt/pw-browsers/chromium).
    executablePath: process.env.CHROMIUM_PATH || undefined,
});

try {
    for (const [slug, url] of Object.entries(opts.targets)) {
        const outDir = path.join("public", "projects", slug);
        await mkdir(outDir, { recursive: true });

        for (const [name, viewport] of Object.entries(VIEWPORTS)) {
            if (opts.only && opts.only !== name) continue;
            const { width, height, ...device } = viewport;
            const context = await browser.newContext({
                viewport: { width, height },
                ...device,
                colorScheme: "dark",
                storageState: opts.state,
            });
            const page = await context.newPage();
            await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
            await page.waitForTimeout(opts.wait);

            const png = await page.screenshot({ type: "png" });
            const file = path.join(outDir, `${name}.webp`);
            await sharp(png).resize({ width }).webp({ quality: 82 }).toFile(file);
            console.log(`✓ ${slug} ${name} -> ${file}`);
            await context.close();
        }
    }
} finally {
    await browser.close();
}
