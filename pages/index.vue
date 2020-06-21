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
	.container {
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
