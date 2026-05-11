#!/usr/bin/env node
/**
 * Build the compat meta-package by copying artifacts from sibling workspace packages.
 * Output goes to ./dist/ so the published tarball is self-contained.
 */
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.resolve(here, "..");
const dist = path.join(pkgRoot, "dist");
const tokensRoot = path.resolve(pkgRoot, "../tokens");
const presetsRoot = path.resolve(pkgRoot, "../presets");
const tokensBuild = path.join(tokensRoot, "build");

if (!existsSync(tokensBuild)) {
  console.error(
    `[meta] tokens build missing at ${tokensBuild}. Run \`pnpm -F @karinMusaka/tokens build\` first.`
  );
  process.exit(1);
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

// css/* and js/*
await cp(path.join(tokensBuild, "css"), path.join(dist, "css"), { recursive: true });
await cp(path.join(tokensBuild, "js"), path.join(dist, "js"), { recursive: true });

// tailwind: _tokens.js + rewritten preset.cjs
await mkdir(path.join(dist, "tailwind"), { recursive: true });
await cp(
  path.join(tokensBuild, "tailwind", "_tokens.js"),
  path.join(dist, "tailwind", "_tokens.js")
);
const preset = await readFile(
  path.join(tokensRoot, "tailwind-preset.cjs"),
  "utf8"
);
// Rewrite the relative require path: build/tailwind/_tokens.js → ./_tokens.js
const rewrittenPreset = preset.replace(
  /require\(["']\.\/build\/tailwind\/_tokens\.js["']\)/,
  'require("./_tokens.js")'
);
await writeFile(path.join(dist, "tailwind", "preset.cjs"), rewrittenPreset);

// presets/reveal/theme.css → dist/reveal-theme.css
await cp(
  path.join(presetsRoot, "reveal", "theme.css"),
  path.join(dist, "reveal-theme.css")
);

// presets/react-pdf/theme.js → dist/react-pdf.js
await cp(
  path.join(presetsRoot, "react-pdf", "theme.js"),
  path.join(dist, "react-pdf.js")
);

console.log("[meta] dist build complete.");
