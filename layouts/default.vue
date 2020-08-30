<script lang="ts">
  /* eslint-disable no-console */
  import Vue from "vue";
  export default Vue.extend({});
</script>

<template>
  <div class="flex lg:flex-row flex-col lg:h-screen h-auto">
    <nav class="lg:hidden flex bg-sidebar p-6">
      <nuxt-link to="/" class="w-32 text-center">
        <img
          class="object-cover rounded-full w-full"
          src="/images/torbjorn.jpg"
          alt="Profile picture of Torbjørn"
        />
      </nuxt-link>
      <div class="flex flex-1 items-center">
        <nuxt-link to="/">
          <h4 class="ml-8 mr-8 mb-0">Articles</h4>
        </nuxt-link>
        <nuxt-link to="/projects/">
          <h4 class="mb-0">Projects</h4>
        </nuxt-link>
        <a href="https://github.com/TorbjornHoltmon" class="ml-8 mb-0 flex justify-center">
          <img class="object-cover w-16" src="/images/Github-Logo.png" alt="Github profile link" />
        </a>
      </div>
    </nav>
    <nav class="lg:flex max-w-sm hidden flex-col bg-sidebar">
      <nuxt-link to="/" class="pt-8 pb-2 px-8">
        <img
          class="object-cover rounded-full w-full"
          src="/images/torbjorn.jpg"
          alt="Profile picture of Torbjørn"
        />
      </nuxt-link>
      <div class="text-center">
        <nuxt-link to="/">
          <h5>Torbjørn Holtmon</h5>
        </nuxt-link>
        <h6>Developer @ <a href="https://www.makingwaves.com">Making Waves</a></h6>
        <nuxt-link to="/">
          <h1>Articles</h1>
        </nuxt-link>
        <nuxt-link to="/projects/">
          <h1>Projects</h1>
        </nuxt-link>
        <a href="https://github.com/TorbjornHoltmon" class="flex justify-center">
          <img class="object-cover w-16" src="/images/Github-Logo.png" alt="Github profile link" />
        </a>
      </div>
    </nav>
    <div class="flex-1 flex lg:overflow-hidden bg-background">
      <!-- Scrollable container -->
      <div class="w-full flex-1 overflow-hidden lg:overflow-y-scroll">
        <div class="m-10">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
