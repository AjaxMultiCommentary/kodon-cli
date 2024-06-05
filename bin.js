#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import * as clack from "@clack/prompts";
import kleur from "kleur";

const packageJson = JSON.parse(
  fs.readFileSync(new URL("package.json", import.meta.url), "utf-8"),
);
const { version } = packageJson;

let cwd = process.argv[2] || ".";

console.log(kleur.underline(kleur.gray(`create-kodon-app version ${version}`)));

clack.intro(
  "Welcome to Kōdōn, a set of components and scripts to help you deploy a static commentary with SvelteKit.",
);

if (cwd === ".") {
  const dir = await clack.text({
    message: "Where should we create your commentary?",
    placeholder: " (press Enter to use the current directory)",
  });

  if (clack.isCancel(dir)) {
    process.exit(0);
  }

  if (dir) {
    cwd = dir;
  }
}

clack.outro(
  `Check out ${cwd}/README.md for info about writing and deploying your application.`,
);
