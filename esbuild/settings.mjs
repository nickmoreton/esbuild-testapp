export function getSettings(options) {
  return {
    entryPoints: ["src/index.js"],
    bundle: true,
    logLevel: "info",
    loader: {
      ".html": "text",
      ".png": "file",
    },
    outdir: "dist",
    ...options,
  };
}
