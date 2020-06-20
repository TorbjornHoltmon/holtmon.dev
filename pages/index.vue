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
	<div class="container">
		<nuxt-content :document="index" />
	</div>
</template>

<style>
	/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
	.container {
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
