export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "cloudflare-pages",
  },
  // https://github.com/nuxt-themes/alpine
  extends: "@nuxt-themes/alpine",
  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    "@nuxthq/studio",
  ],
});
