import * as esbuild from "esbuild";
import { getSettings } from "./settings.mjs";
import fs from "fs";

const settings = getSettings({
  sourcemap: true,
  banner: {
    js: `${fs.readFileSync("esbuild/reload.mjs", "utf-8")}\n`, // reload script
  },
});

const ctx = await esbuild.context(settings);

await ctx.watch();

const { host, port } = await ctx.serve({
  port: 5500,
  servedir: "dist",
  fallback: "dist/index.html",
});
