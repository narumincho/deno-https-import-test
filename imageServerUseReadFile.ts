import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { fromFileUrl } from "https://deno.land/std@0.167.0/path/mod.ts";

/**
 * Deno の画像を返す HTTP サーバー
 */
export const startDenoImageServer = async (): Promise<void> => {
  const denoImage = await Deno.readFile(
    fromFileUrl(import.meta.resolve("./deno.png")),
  );

  serve(() => {
    return new Response(denoImage, {
      headers: { "Content-Type": "image/png" },
    });
  });
};
