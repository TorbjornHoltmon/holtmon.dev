export default defineNuxtConfig({
  routeRules: {
    "/": { swr: 172800, ssr: true, cache: { maxAge: 600 } },
    "/articles": { swr: 172800, ssr: true, cache: { maxAge: 600 } },
    "/articles/**": { swr: 172800, ssr: true, cache: { maxAge: 600 } },
    "/today-i-learned/**": { swr: 172800, ssr: true, cache: { maxAge: 600 } },
  },
  nitro: {
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
