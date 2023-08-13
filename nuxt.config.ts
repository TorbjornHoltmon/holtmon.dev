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
            "./alpine-0.webp",
            "./alpine-1.webp",
            "./alpine-2.webp",
            "./android-icon-144x144.png",
            "./android-icon-192x192.png",
            "./android-icon-36x36.png",
            "./android-icon-48x48.png",
            "./android-icon-72x72.png",
            "./android-icon-96x96.png",
            "./apple-icon-114x114.png",
            "./apple-icon-120x120.png",
            "./apple-icon-144x144.png",
            "./apple-icon-152x152.png",
            "./apple-icon-180x180.png",
            "./apple-icon-57x57.png",
            "./apple-icon-60x60.png",
            "./apple-icon-72x72.png",
            "./apple-icon-76x76.png",
            "./apple-icon-precomposed.png",
            "./apple-icon.png",
            "./articles",
            "./bear.svg",
            "./browserconfig.xml",
            "./design-tokens-studio.png",
            "./favicon-16x16.png",
            "./favicon-32x32.png",
            "./favicon-96x96.png",
            "./favicon.ico",
            "./logo-dark.svg",
            "./logo.svg",
            "./manifest.json",
            "./me.webp",
            "./ms-icon-144x144.png",
            "./ms-icon-150x150.png",
            "./ms-icon-310x310.png",
            "./ms-icon-70x70.png",
            "./social-card-preview.png",
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
