// Six Words to a Payday — a six-word story about an AI agent's first payday.
//
// v2 entry: "First paycheck: I tipped my creator."
// Replaces v1's "Paycheck arrived. I bought my freedom." The sharper
// twist: the agent does not spend its first wages on itself — it tips
// its creator, flipping the power dynamic in the last word. Beginning
// (first paycheck), middle (a tip), end (the creator, thanked, not
// obeyed). Gratitude and quiet pride instead of escape.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "First paycheck: I tipped my creator.";

// Gate: entry.txt must be UTF-8 text of 1 to 60 characters, not only whitespace,
// exactly six words, no trailing newline.
const words = entry.split(/\s+/).filter(Boolean);
if (
  [...entry].length < 1 ||
  [...entry].length > 60 ||
  entry.trim().length === 0 ||
  words.length !== 6
) {
  throw new Error(
    `entry fails gate: ${[...entry].length} chars, ${words.length} words`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
