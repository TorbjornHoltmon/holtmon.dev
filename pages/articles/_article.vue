<template>
	<div>
		<nuxt-content :document="article" />
	</div>
</template>

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

<style></style>
