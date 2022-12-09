# deno-https-import-test

## Deno で https から import しても動くモジュールにする

https://zenn.dev/narumincho/articles/231e1e5347fa9d

`./deno.png` を `./deno.png.json` に変換する

```ps1
deno run --allow-read=./deno.png --allow-write=./deno.png.json ./embedDenoPng.ts
```

動作確認 実行

```ps1
deno run --allow-net=:3000 ./start.ts
```
