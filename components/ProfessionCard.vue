<script setup lang="ts">
interface Props {
	title: string;
	imgUrl: string;
}
const props = defineProps<Props>();
</script>

<template>
	<div class="h-full w-full space-y-2 py-2 lg:h-full">
		<!-- <p align="center">{{ props.title }}</p> -->
		<img
			alt=""
			:src="props.imgUrl"
			class="h-full w-full rounded-lg object-cover object-left-top"
		/>
	</div>
</template>
