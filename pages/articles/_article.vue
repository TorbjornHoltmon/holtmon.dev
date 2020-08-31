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
  <article class="container max-w-screen-sm md:max-w-screen-md mx-auto pl-4 pr-4 md:p-0">
    <h2>{{ article.title }}</h2>
    <p>Last updated: {{ article.date.split("T")[0] }}</p>
    <img class="object-cover w-full" :src="article.poster_image" alt="Article header image" />
    <nuxt-content :document="article" />
  </article>
</template>

<style></style>
