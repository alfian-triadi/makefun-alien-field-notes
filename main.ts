import { mkdirSync, writeFileSync } from "node:fs";

// Alien Field Notes: The Two Day Earth Review
// One original line (161 chars), an alien tourist's review of planet Earth.
const ENTRY =
  "Earth: the locals spend a third of their lives asleep, then buy drinks to stay awake for the other two-thirds. Bold strategy. 4/5 stars — would nap here again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
