<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    async asyncData({ $content }) {
      const index = await $content("index").fetch();

      return {
        index,
      };
    },
  });
</script>

<template>
  <div class="container max-w-screen-sm md:max-w-screen-md mx-auto pl-4 pr-4 md:p-0">
    <div></div>
  </div>
</template>

<style></style>
