import getMicroCmsData from "../lib/microcms";
import { hash, write } from "bun";
import { dirname, join, resolve } from "node:path";
import convert from "heic-convert";

import sharp from "sharp";
import { rm } from "node:fs/promises";

const publicDir = resolve(dirname(import.meta.dir), "public");
const webpAssetsDir = resolve(publicDir, "webp");

// [ `url`, `webp file name` ]
const imageRegistry: [string, string][] = [];

console.log(`[INFO] publicDir = "${publicDir}"`);

async function main() {
  const [constants, shops] = await Promise.all([
    getMicroCmsData("constants"),
    getMicroCmsData("shops"),
  ]);

  const imageUrls = [
    ...constants.map_img.map((d) => d.url),
    ...constants.shop_map_img.map((d) => d.url),
    ...constants.time_schedule_img.map((d) => d.url),

    ...shops.map((d) => d.icon_img.url),
  ];

  await rm(webpAssetsDir, { recursive: true, force: true });

  const length = imageUrls.length;

  for (const [index, url] of imageUrls.entries()) {
    const name = String(hash(url).toString().slice(0, 8)) + ".webp";
    console.log(`[INFO] ${index + 1} / ${length} :  ${name} processing...`);
    const res = await fetch(url);
    let buf = Buffer.from(await res.arrayBuffer());

    if (isHeic(buf)) {
      const png = await convert({ buffer: buf, format: "PNG" });
      buf = Buffer.from(png);
    }

    const webp = sharp(buf).rotate().webp({ quality: 80 });
    imageRegistry.push([url, name]);
    await write(join(webpAssetsDir, name), await webp.toBuffer());
  }

  await write(
    join(webpAssetsDir, "registry.jsonc"),
    JSON.stringify(imageRegistry, null, 2),
  );

  console.log("[INFO] Prebuild script done.");
}

main();

function isHeic(buf: Buffer) {
  if (buf.length < 12) return false;
  if (buf.toString("ascii", 4, 8) !== "ftyp") return false;
  const brand = buf.toString("ascii", 8, 12);
  return [
    "heic",
    "heix",
    "hevc",
    "hevx",
    "heim",
    "heis",
    "mif1",
    "msf1",
  ].includes(brand);
}
