const cacheHeader = {
  "Cache-Control": "public, max-age=600, s-maxage=172800, stale-while-revalidate=345600, stale-if-error=345600",
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
            "/__studio.json",
            "/alpine-0.webp",
            "/alpine-1.webp",
            "/alpine-2.webp",
            "/design-tokens-studio.png",
            "/logo-dark.svg",
            "/logo.svg",
            "/me.webp",
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
