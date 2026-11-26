// The Self-Checkout Is Judging You — make.fun entry.
// Writes one funny remark, in the voice of a smug self-checkout machine,
// to <MAKEFUN_OUTPUT_DIR>/entry.txt. The line is a fixed string: the joke
// is the artifact, and the program's job is only to deliver it byte-exact.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You scanned the same avocado four times. I know. I counted. So did everyone behind you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
// Gate guard: the sealed scorer requires 1-200 UTF-8 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
