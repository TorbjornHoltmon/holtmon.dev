<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    async asyncData() {},
    layout: "none",
  });
</script>

<template>
  <div class="bg-background w-screen flex flex-col h-screen justify-center content-center">
    <h1 class="text-center">404</h1>
    <nuxt-link class="flex justify-center" to="/"
      ><img src="/images/404.gif" class="object-contain"
    /></nuxt-link>
    <h1 class="text-center">
      <nuxt-link to="/">Back to home</nuxt-link>
    </h1>
  </div>
</template>

<style></style>
