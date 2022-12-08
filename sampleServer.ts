import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { messageText } from "./message.ts";

/**
 * 簡単なテキストを返すだけのHTTP サーバー
 */
export const main = (): void => {
  serve((request) => {
    if (new URL(request.url).pathname === "/message") {
      return new Response(messageText);
    }
    return new Response("GitHub で公開しているHTTPのサーバーです");
  });
};
