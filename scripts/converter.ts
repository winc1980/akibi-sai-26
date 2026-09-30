import { Glob, write } from "bun";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const glob = new Glob("./public/**/*.{png,jpg}");
const scannedFiles = await Array.fromAsync(glob.scan());

const pattern = /(.+)\.[png,jpg]/;

for (const fileName of scannedFiles) {
  console.log(`[INFO] ${fileName} processing...`);
  const file = await readFile(fileName);
  const buf = file.buffer;

  const webp = sharp(buf).rotate().webp({ quality: 95 });

  const match = fileName.match(pattern);
  if (!match) {
    console.log(`スキップしました：${fileName}`);
    continue;
  }
  const nameWithoutExtension = match[1];

  await write(`${nameWithoutExtension}.webp`, await webp.toBuffer());
}

console.log("[INFO] Convert done.");
