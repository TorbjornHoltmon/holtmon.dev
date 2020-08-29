<script>
  export default {
    async asyncData({ params, $content }) {
      const article = await $content("articles", params.article).fetch();
      return {
        article,
      };
    },
    head() {
      return {
        title: (this.article.seo_title || this.article.title) + " | Torbjørn Holtmon",
        meta: [
          { hid: "description", name: "description", content: this.article.seo_desc || this.article.preview },
        ],
      };
    },
  };
</script>

<template>
  <div class="container max-w-screen-sm md:max-w-screen-md mx-auto pl-4 pr-4 md:p-0">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>

<style></style>
