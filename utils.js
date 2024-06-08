import fs from "node:fs";
import path from "node:path";

export function mkdirp(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (e) {
    if (e.code === 'EEXIST') {
      return;
    }

    throw e;
  }
}

export function copy(from, to) {
  if (!fs.existsSync(from)) {
    console.error(`Source directory does not exist: ${from}`);
    return;
  }

  const stat = fs.statSync(from);

  if (stat.isDirectory()) {
    fs.readdirSync(from).forEach((f) => {
      copy(path.join(from, f), path.join(to, f));
    });
  } else {
    mkdirp(path.dirname(to));

    fs.copyFileSync(from, to);
  }
}
