// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		{
			enforce: "pre",
			...mdx({
				rehypePlugins: [
					[
						rehypePrettyCode,
						{
							theme: "material-theme-ocean", // or 'one-dark-pro', 'github-dark', etc.
							keepBackground: false, // allows you to use your own background color
						},
					],
				],
			}),
		},
		react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
	],
});
