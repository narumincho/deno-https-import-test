import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import denoImageBase64 from "./deno.png.json" assert { type: "json" };
import { decode } from "https://deno.land/std@0.167.0/encoding/base64.ts";

const denoImage = decode(denoImageBase64);

/**
 * Deno の画像を返す HTTP サーバー
 */
export const startDenoImageServer = (): void => {
  serve(() => {
    return new Response(denoImage, {
      headers: { "Content-Type": "image/png" },
    });
  });
};
