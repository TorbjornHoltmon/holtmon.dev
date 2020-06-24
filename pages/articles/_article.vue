<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		async asyncData({ params, $content }) {
			const article = await $content("articles", params.article).fetch();

			return {
				article,
			};
		},
	});
</script>

<template>
	<div class="container max-w-screen-sm md:max-w-screen-md mx-auto pl-4 pr-4 md:p-0">
		<nuxt-content :document="article" />
	</div>
</template>

<style></style>
