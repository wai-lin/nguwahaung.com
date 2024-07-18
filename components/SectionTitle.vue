<script setup lang="ts">
const props = defineProps({
	miniTitle: {
		type: String,
		default: "",
	},
	title: {
		type: String,
		default: "",
	},
	class: {
		type: String,
		default: "",
	},
});

const baseClass = `'md:sticky lg:sticky md:top-20 md:pb-60 ${props.class}'`;
</script>

<template>
	<div :class="baseClass" id="section-header">
		<p class="mb-2.5 tracking-tighter text-medium-dark">{{ miniTitle }}</p>
		<h1 class="section-title md:leading-[44px]">{{ title }}</h1>
	</div>
</template>
