import { encode } from "https://deno.land/std@0.167.0/encoding/base64.ts";
import { fromFileUrl } from "https://deno.land/std@0.167.0/path/mod.ts";

const denoImage = await (await fetch(import.meta.resolve("./deno.png")))
  .arrayBuffer();

const json = JSON.stringify(encode(denoImage));

await Deno.writeTextFile(
  fromFileUrl(import.meta.resolve("./deno.png.json")),
  json,
);
