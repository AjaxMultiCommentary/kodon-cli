#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import * as clack from "@clack/prompts";
import kleur from "kleur";

import { copy } from "./utils.js";

const packageJson = JSON.parse(
    fs.readFileSync(new URL("package.json", import.meta.url), "utf-8"),
);
const { version } = packageJson;

let targetDirectory = process.argv[2] || ".";

console.log(kleur.underline(kleur.gray(`create-kodon-app version ${version}`)));

clack.intro(
    "Welcome to Kōdōn, a set of components and scripts to help you deploy a static commentary with SvelteKit.",
);

if (targetDirectory === ".") {
    const dir = await clack.text({
        message: "Where should we create your commentary?",
        placeholder: " (press Enter to use the current directory)",
    });

    if (clack.isCancel(dir)) {
        process.exit(0);
    }

    if (dir) {
        targetDirectory = dir;
    }
}

if (fs.existsSync(targetDirectory)) {
    if (fs.readdirSync(targetDirectory).length > 0) {
        const overwrite = await clack.confirm({
            message: `${targetDirectory} is not empty. Overwrite contents?`,
            initialValue: false,
        });

        if (overwrite !== true) {
            clack.outro("Refused to overwrite directory. Exiting.");
            process.exit(0);
        }
    }
}

const sourceDirectory = fileURLToPath(
    new URL("./template", import.meta.url).href,
);

copy(sourceDirectory, targetDirectory);

clack.outro(
    `Check out ${targetDirectory}/README.md for info about writing and deploying your application.`,
);
