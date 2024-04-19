import build from "@hono/vite-cloudflare-pages";
import { defineConfig } from "vite";
import honox from "honox/vite";
import client from "honox/vite/client";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
    };
  } else {
    return {
      plugins: [honox(), build()],
    };
  }
});
