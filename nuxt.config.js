export default {
	// mode: "universal",
	mode: process.env.BUILD_MODE,
	target: "static",
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	/*
	 ** Content options
	 */
	content: {
		markdown: {
			prism: {
				theme: "@/assets/css/content/code.css",
			},
		},
	},
	components: true,
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#fff" },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		"@nuxt/typescript-build",
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		"@nuxtjs/tailwindcss",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/axios",
		// Doc: https://github.com/nuxt-community/dotenv-module
		"@nuxtjs/dotenv",
		// Doc: https://content.nuxtjs.org/
		"@nuxt/content",
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Generate Config
	 */
	generate: {
		fallback: true,
		async routes() {
			const { $content } = require("@nuxt/content");
			const routes = [];
			// Index
			routes.push.apply(routes, await $content().only(["path"]).only(["path"]).fetch());

			// Articles
			routes.push.apply(routes, await $content("articles").only(["path"]).fetch());

			return routes.map((file) => (file.path === "/index" ? "/" : file.path));
		},
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.devtool = "#source-map";
			}
		},
	},
};
