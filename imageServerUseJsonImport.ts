import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import denoImage from "./deno.png.json" assert { type: "json" };

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
