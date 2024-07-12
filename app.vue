<script setup>
useHead({
	htmlAttrs: {
		lang: "en",
		class: "font-body text-slate-900",
	},
	titleTemplate(titleChunk) {
		if (titleChunk) return `${titleChunk} - Ngu Wah Aung`;
		return `Ngu Wah Aung`;
	},
	link: [
		{
			rel: "stylesheet",
			href: "/geist/stylesheet.css",
		},
	],
});
</script>

<template>
	<NuxtPage />
</template>
