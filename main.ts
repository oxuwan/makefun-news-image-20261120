import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// entry.png sits beside this file, wherever the program is run from.
const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

if (!existsSync(src)) {
  console.error("error: entry.png is missing");
  process.exit(1);
}

const size = statSync(src).size;
if (size > 1048576) {
  console.error(`error: entry.png is ${size} bytes, over the 1 MiB limit`);
  process.exit(1);
}

const bytes = readFileSync(src);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  console.error("error: entry.png is not a valid PNG (bad magic bytes)");
  process.exit(1);
}

// IHDR must follow the magic: 4-byte length, "IHDR", then width/height.
if (bytes.length < 33 || bytes.subarray(12, 16).toString("ascii") !== "IHDR") {
  console.error("error: entry.png has no IHDR chunk");
  process.exit(1);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024 || width === 0 || height === 0) {
  console.error(`error: entry.png is ${width}x${height}, over the 1024x1024 limit`);
  process.exit(1);
}

// The file must end with a valid IEND trailer (length 0 + "IEND" + CRC).
const IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44]);
if (!bytes.subarray(bytes.length - 12, bytes.length - 4).equals(IEND)) {
  console.error("error: entry.png has no valid IEND trailer");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log("wrote entry.png to " + outDir);
