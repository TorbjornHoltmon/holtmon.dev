<template>
    <div class="bg-background w-screen flex flex-col h-screen justify-center content-center">
        <template v-if="error.statusCode === 404">
            <h1 class="text-center">404</h1>
            <nuxt-link class="flex justify-center" to="/"
                ><img src="/images/404.gif" class="object-contain"
            /></nuxt-link>
            <h1 class="text-center">
                <nuxt-link to="/">Back to home</nuxt-link>
            </h1>
        </template>
        <template v-else>
            <h1 class="text-center">something really bad happen...</h1>
            <h1 class="text-center">
                <nuxt-link to="/">Back to home</nuxt-link>
            </h1>
        </template>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        layout: "none",
        props: ["error"] as string[],
    });
</script>
