import * as esbuild from "esbuild";
import { getSettings } from "./settings.mjs";

const settings = getSettings({minify: true});

await esbuild.build(settings);
