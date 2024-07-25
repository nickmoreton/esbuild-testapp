import { sassPlugin } from "esbuild-sass-plugin";

export function getSettings(options) {
  return {
    entryPoints: ["src/index.js"],
    bundle: true,
    logLevel: "info",
    loader: {
      ".html": "text",
      ".png": "file",
    },
    plugins: [
      sassPlugin(),
    ],
    outdir: "dist",
    ...options,
  };
}
