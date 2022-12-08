import { serve } from "std/http/server.ts";

/**
 * コードで import map を使っている HTTP サーバー
 */
export const startUseImportMapHttpServer = () => {
  serve(() => {
    return new Response("コードで import map を使ったよ");
  });
};
