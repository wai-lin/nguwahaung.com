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

const baseClass = `'md:sticky lg:sticky md:top-10 md:pb-60 ${props.class}'`;
</script>

<template>
	<div :class="baseClass" id="section-header">
		<p class="text-medium-dark">{{ miniTitle }}</p>
		<h1 class="section-title">{{ title }}</h1>
	</div>
</template>
