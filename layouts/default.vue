<script lang="ts">
	import Vue from "vue";
	export default Vue.extend({});
</script>

<template>
	<div class="flex h-screen">
		<div class="lg:flex w-64 hidden flex-col">
			<div class="pt-8 pb-2 px-8">
				<img class="object-cover rounded-full w-full" src="/images/img_0123-02.jpeg" />
			</div>
			<div class="text-center">
				<h2 class="text-lg">Torbjørn Holtmon</h2>

				<div>Developer - Making Waves</div>
			</div>
			<div class="text-center">
				<h1>Blog</h1>
				<h1>Projects</h1>
			</div>
		</div>
		<div class="flex-1 flex overflow-hidden">
			<!-- Scrollable container -->
			<div class="w-full flex-1 overflow-y-scroll">
				<div class="flex test mx-auto pt-8">
					<nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
	.test {
		max-width: 680px;
	}
</style>
