<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		async asyncData({ $content }) {
			const index = await $content("index").fetch();

			return {
				index,
			};
		},
		mounted() {},
	});
</script>

<template>
	<div class="container pl-4 pr-4 md:p-0">
		<nuxt-content :document="index" />
	</div>
</template>

<style>
	/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
