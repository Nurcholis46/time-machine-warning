import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line: a warning label for a time machine, 120 characters at most.
// Chosen against the judge's brief, in its own order: it is squarely a
// time machine warning label (it opens "WARNING:" and names the machine's
// warranty, the deadpan voice of a genuine safety notice); it turns a real
// hazard of time travel — the grandfather paradox, killing your own
// grandfather — into the joke instead of naming it flatly; it saves the
// surprise for the last few words, escalating from warranty to existence
// and then landing on the mundane "resale value", so the laugh hits where
// the reader least expects it; and it wastes no words, every phrase doing
// work inside the limit. It explains nothing: the voided warranty, the
// voided existence and the voided resale value are the whole joke.
// Alternatives weighed and set aside: a duplicate-self variant ("If you
// meet yourself, do not lend yourself money. You never pay yourself
// back.") is a fine paradox joke but its twist is a shrug, not an
// escalation, and it spends its best image on a loan; a butterfly variant
// ("Do not step on butterflies. One already sued us for wrongful death
// in 2087.") lands its twist well but leans on a trope every time
// traveller already knows, where the grandfather line earns its laugh
// from the list itself. The warranty line keeps the hazard, the straight
// face and the twist in one breath, so it stands.
const text =
  "WARNING: Do not kill your grandfather. It voids your warranty, your existence, and this machine's resale value.";

// The bounty requires 1-120 characters, not only white space, and a single
// line: fail loudly instead of writing an entry the judge would refuse.
// The gate is strict on purpose — the entry file must be exactly this one
// line, byte for byte: no carriage return (a second kind of line break),
// no leading or trailing padding (the judge reads the file as submitted),
// and no control characters.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 120 || text.trim().length === 0) {
  throw new Error(
    `entry must be 1-120 characters of non-blank text, got ${codePoints}`,
  );
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (text !== text.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (/[\u0000-\u001f\u007f]/.test(text)) {
  throw new Error("entry must not contain control characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
chmodSync("/output/entry.txt", 0o644);

// Read it back and prove the file on disk is exactly the line: a write
// that silently truncated, re-encoded or padded the entry would otherwise
// ship a different text to the judge than the one gated above.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("entry file does not match the gated line");
}
