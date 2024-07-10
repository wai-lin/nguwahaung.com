<script setup>
useHead({
	htmlAttrs: {
		lang: "en",
	},
	titleTemplate(titleChunk) {
		if (titleChunk) return `${titleChunk} - Ngu Wah Aung`;
		return `Ngu Wah Aung`;
	},
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
