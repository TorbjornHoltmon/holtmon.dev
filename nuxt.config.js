export default {
    target: "static",
    /*
     ** Headers of the page
     */
    head: {
        title: "Torbjørn Holtmon",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Web developer Torbjørn Holtmon's personal website",
            },
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
            {
                rel: "stylesheet",
                type: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap",
            },
        ],
        script: [
            {
                defer: true,
                src: "https://static.cloudflareinsights.com/beacon.min.js",
                body: true,
                "data-cf-beacon": '{"token": "5bfcbc26e992415fabe4c332dc156ee3"}',
            },
        ],
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
     ** Content options
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["@/assets/fonts/fonts.css", "@/assets/css/main.css"],
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
        // Doc: https://github.com/juliomrqz/nuxt-optimized-images
        "@aceforth/nuxt-optimized-images",
    ],

    optimizedImages: {
        optimizeImages: true,
    },
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
        // Doc : https://github.com/nuxt-community/sitemap-module
        "@nuxtjs/sitemap",
    ],
    // CSP
    // Not working
    // render: {
    // 	csp: {
    // 		hashAlgorithm: "sha256",
    // 		unsafeInlineCompatibility: true,
    // 		addMeta: false,
    // 		policies: {
    // 			"default-src": ["'self'"],
    // 			"img-src": ["https:", "'self'"],
    // 			"font-src": ["'self'"],
    // 			"media-src": ["'self'"],
    // 			"frame-src": ["'self'"],
    // 			"style-src": ["'self'"],
    // 			"script-src": ["'self'"],
    // 			"connect-src": ["self"],
    // 			"form-action": ["'self'"],
    // 			"frame-ancestors": ["'none'"],
    // 		},
    // 	},
    // },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Sitemape module configuration
     ** See https://github.com/nuxt-community/sitemap-module
     */
    sitemap: {
        hostname: "https://holtmon.dev",
        gzip: true,
        trailingSlash: false,
    },
    /*
     ** Router config
     ** See https://github.com/nuxt-community/sitemap-module
     */
    router: {},
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
            if (ctx.isDev && ctx.isClient && process.env.BUILD_MODE === "development") {
                config.devtool = "#source-map";
            }
        },
    },
};
