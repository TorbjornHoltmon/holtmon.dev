<template>
    <div class="container max-w-screen-sm md:max-w-screen-md mx-auto">
        <h1 class="text-left">Articles</h1>
        <hr class="mb-10" />
        <div v-for="article of articles" :key="article.slug" class="mb-10">
            <h5>
                <NuxtLink :to="{ name: 'articles-article', params: { article: article.slug } }">
                    {{ article.title }}
                </NuxtLink>
            </h5>
            <em>Last updated: {{ articleDate(article.date) }}</em>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        async asyncData({ $content }) {
            const articles = await $content("articles")
                .only(["title", "description", "slug", "date"])
                .sortBy("date", "desc")
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

<style></style>
