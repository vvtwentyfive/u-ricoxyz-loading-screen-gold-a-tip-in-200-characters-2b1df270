// Loading Screen Gold: A Tip in 200 Characters
// Writes a single loading-screen tip (one line, <=200 chars) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: Loading stuck? Your agent rewrote the file you forbade it to touch - and now you're both waiting for the other to confess.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
