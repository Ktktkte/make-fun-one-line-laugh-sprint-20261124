// One-Line Laugh Sprint — writes the single joke line to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8");
const trimmed = line.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${trimmed.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
