<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    async asyncData({ $content }) {
      const articles = await $content("articles")
        .only(["title", "description", "slug", "date", "poster_image"])
        .sortBy("date", "description")
        .fetch();

      return {
        articles,
      };
    },
    methods: {
      articleDate(date: string): string {
        return new Date(date).toLocaleString("en-us", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      },
    },
  });
</script>

<template>
  <div class="container max-w-screen-sm md:max-w-screen-md mx-auto">
    <h1 class="text-left">Articles</h1>
    <hr />
    <div v-for="article of articles" :key="article.slug" class="mt-10">
      <h5>
        <NuxtLink :to="{ name: 'articles-article', params: { article: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </h5>
      <p>
        <em>Last updated: {{ articleDate(article.date) }}</em>
      </p>
      <NuxtLink :to="{ name: 'articles-article', params: { article: article.slug } }">
        <img class="object-cover h-48 mb-10 w-full" :src="article.poster_image" alt="Article header image" />
      </NuxtLink>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>

<style></style>
