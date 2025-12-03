import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
	plugins: [
		{
			enforce: "pre",
			...mdx({
				rehypePlugins: [
					[
						rehypePrettyCode,
						{
							theme: "material-theme-ocean",
							keepBackground: false,
						},
					],
				],
			}),
		},
		react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
	],
});
