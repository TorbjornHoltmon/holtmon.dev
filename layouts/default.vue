<script lang="ts">
	import Vue from "vue";
	export default Vue.extend({});
</script>

<template>
	<div class="flex">
		<div class="lg:w-1/6 bg-themeBackground flex flex-col">
			<img class="rounded-full border-themeAccent border-2 mx-auto" src="/images/img_0123-2.jpeg" />

			<div class="text-center">
				<h2 class="text-lg">Erin Lindford</h2>

				<div class="text-purple-500">Customer Support</div>

				<div class="text-gray-600">erinlindford@example.com</div>

				<div class="text-gray-600">(555) 765-4321</div>
			</div>
		</div>
		<div class="lg:w-5/6 lg:relative bg-themeDunno text-themeText">
			<nuxt />
		</div>
	</div>
</template>

<style lang="postcss"></style>
