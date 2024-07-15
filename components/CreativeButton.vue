<script lang="ts" setup>
const emit = defineEmits(["click"]);
const handleClick = (event: MouseEvent) => {
	emit("click", event);
};
</script>

<template>
	<button
		ref="button"
		class="exampleBtn rounded-full border-2 border-medium-dark bg-white px-8 py-4 text-dark before:bg-primary-500 hover:border-primary-500"
		@click="handleClick"
	>
		<span class="relative z-10">Hover Me</span>
	</button>
</template>

<style scoped>
.exampleBtn {
	padding: 12px 24px;
	position: relative;
	overflow: hidden;
	z-index: 1;

	span {
		z-index: 1;
		position: relative;
	}

	&:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 140px;
		height: 140px;
		border-radius: 50%;
		transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
		transition:
			opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
			transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
		opacity: 0;
	}

	&:hover {
		span {
			color: hsl(222, 100%, 95%);
		}

		&:before {
			opacity: 1;
			transition-duration: 0.85s;
			transform: translate3d(-50%, -50%, 0) scale3d(1.2, 1.2, 1.2);
		}
	}
}
</style>
