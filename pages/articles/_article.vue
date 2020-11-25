<template>
    <article class="container max-w-screen-sm md:max-w-screen-md mx-auto">
        <h2>{{ article.title }}</h2>
        <p>
            <em>Last updated: {{ articleDate }}</em>
        </p>
        <hr class="mb-10" />
        <img class="object-cover h-48 mb-10 w-full" :src="article.poster_image" alt="Article header image" />
        <nuxt-content :document="article" />
    </article>
</template>

<script>
    export default {
        async asyncData({ params, $content, error }) {
            try {
                if (!params.article) {
                    error({ statusCode: 404, message: "Page not found" });
                }
                const article = await $content("articles", params.article).fetch();

                return {
                    article,
                };
            } catch {
                error({ statusCode: 404, message: "Page not found" });
            }
        },
        head() {
            return {
                title: (this.article.seo_title || this.article.title) + " | Torbjørn Holtmon",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: this.article.seo_desc || this.article.preview,
                    },
                ],
            };
        },
        computed: {
            articleDate() {
                return new Date(this.article.date).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                });
            },
        },
    };
</script>

<style></style>
