<script setup lang="ts">
interface Props {
	width?: number;
	height?: number;
}

const props = withDefaults(defineProps<Props>(), {
	width: 56,
	height: 24,
});
</script>

<template>
	<svg
		:width="props.width"
		:height="props.height"
		viewBox="0 0 56 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M50.0935 10.4573L41.8181 2.18182L43.9999 0L55.9999 12.0001L43.9999 24L41.8181 21.8182L50.0935 13.5429H31.3154V10.4573H50.0935Z"
			fill="currentColor"
		/>
		<rect
			x="0.459961"
			y="10.4575"
			width="30.8556"
			height="3.08556"
			fill="currentColor"
		/>
	</svg>
</template>
