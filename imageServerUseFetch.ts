import { serve } from "https://deno.land/std@0.167.0/http/server.ts";

/**
 * Deno の画像を返す HTTP サーバー
 */
export const startDenoImageServer = async (): Promise<void> => {
  const denoImage = new Uint8Array(
    await (await fetch(import.meta.resolve("./deno.png")))
      .arrayBuffer(),
  );

  serve(() => {
    return new Response(denoImage, {
      headers: { "Content-Type": "image/png" },
    });
  });
};
