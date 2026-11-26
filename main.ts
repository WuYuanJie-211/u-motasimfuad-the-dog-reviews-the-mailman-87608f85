// The Dog Reviews the Mailman — make.fun one-liner entry.
// Writes one funny one-line review a dog gives the mailman to /output/entry.txt.
// Gate: UTF-8 text of 1 to 200 characters, not only white space.
import * as fs from "fs";

const LINE =
  "One star. I have guarded this gate for 2,147 mornings and he still flinches \u2014 yesterday he dropped the letters, whispered 'good boy,' and I let him live. Once.";

const OUT = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`line is ${chars} chars, gate needs 1-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line is only white space");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with white space");
  }
  // Make sure the output directory exists, then write directly to the
  // output path: no tempfile, no rename.
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(OUT, LINE, { encoding: "utf8", mode: 0o644 });
  fs.chmodSync(OUT, 0o644);
  // Re-read and byte-verify the file is exactly the line.
  const back = fs.readFileSync(OUT, "utf8");
  if (back !== LINE) {
    throw new Error("verification failed: /output/entry.txt differs from the line");
  }
  const bytes = Buffer.byteLength(back, "utf8");
  if (bytes !== Buffer.byteLength(LINE, "utf8")) {
    throw new Error("verification failed: byte length mismatch");
  }
  // Mode self-check: must be 0644.
  const mode = fs.statSync(OUT).mode & 0o777;
  if (mode !== 0o644) {
    throw new Error(`mode is ${mode.toString(8)}, expected 644`);
  }
  console.log(`wrote ${chars} chars (${bytes} bytes) to ${OUT}, mode 644, verified`);
}

main();
