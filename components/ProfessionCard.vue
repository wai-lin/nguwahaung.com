<script setup lang="ts">
interface Props {
	title: string;
	imgUrl: string;
}
const props = defineProps<Props>();
</script>

<template>
	<div class="h-[220px] w-full space-y-2 lg:h-[300px] lg:w-[400px]">
		<p align="center">{{ props.title }}</p>
		<img
			alt=""
			:src="props.imgUrl"
			class="h-4/5 w-full rounded-lg object-cover"
		/>
	</div>
</template>
