import { encode } from "https://deno.land/std@0.167.0/encoding/base64.ts";

const denoImage = await (await fetch(import.meta.resolve("./deno.png")))
  .arrayBuffer();

const json = JSON.stringify(encode(denoImage));

await Deno.writeTextFile(
  new URL(import.meta.resolve("./deno.png.json")),
  json,
);
