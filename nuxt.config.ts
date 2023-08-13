const cacheHeader = {
  "Cache-Control": "public, max-age=600, s-maxage=172800",
};

export default defineNuxtConfig({
  routeRules: {
    "/": {
      ssr: true,
      headers: cacheHeader,
    },
    "/articles": {
      ssr: true,
      headers: cacheHeader,
    },
    "/articles/**": {
      ssr: true,
      headers: cacheHeader,
    },
    "/today-i-learned/**": {
      ssr: true,
      headers: cacheHeader,
    },
  },
  nitro: {
    cloudflare: {
      pages: {
        defaultRoutes: false,
        routes: {
          version: 1,
          include: ["/*"],
          exclude: [
            "/_nuxt/*",
            "/*",
            "/social-card-preview.png",
            "/articles/configure-alpine.webp",
            "/articles/design-tokens.webp",
            "/articles/get-started.webp",
            "/articles/write-articles.webp",
            "/api/_content/cache.1691617728914.json",
          ],
        },
      },
    },
    future: {
      nativeSWR: true,
    },
    preset: "cloudflare-pages",
  },
  // https://github.com/nuxt-themes/alpine
  extends: "@nuxt-themes/alpine",
  modules: [
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    "@nuxthq/studio",
  ],
});
