<script lang="ts">
	/* eslint-disable no-console */
	import Vue from "vue";
	export default Vue.extend({});
</script>

<template>
	<div class="flex lg:flex-row flex-col lg:h-screen h-auto">
		<nav class="lg:hidden flex bg-sidebar p-6">
			<div class="w-32 text-center">
				<img class="object-cover rounded-full w-full" src="/images/torbjorn.jpg" />
			</div>
			<div class="flex flex-1 items-center">
				<h1 class="ml-8 mr-8 mb-0">Blog</h1>
				<h1 class="mb-0">Projects</h1>
			</div>
		</nav>
		<nav class="lg:flex max-w-sm hidden flex-col bg-sidebar">
			<div class="pt-8 pb-2 px-8">
				<img class="object-cover rounded-full w-full" src="/images/torbjorn.jpg" />
			</div>
			<div class="text-center">
				<h5>Torbjørn Holtmon</h5>
				<h6>Developer @ <a href="https://www.makingwaves.com">Making Waves</a></h6>
				<h1>Blog</h1>
				<h1>Projects</h1>
			</div>
		</nav>
		<div class="flex-1 flex lg:overflow-hidden bg-background">
			<!-- Scrollable container -->
			<div class="w-full flex-1 overflow-hidden lg:overflow-y-scroll">
				<div class="flex pt-8">
					<nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss"></style>
