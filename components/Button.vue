<script lang="ts" setup>
const props = defineProps({
	class: {
		type: String,
		default: "",
	},
});

const btnClasses = computed(() => {
	return `btn rounded-full border-2 border-medium-dark px-4 py-2 md:px-8 md:py-4 text-dark before:bg-primary-500 hover:border-primary-500 font-medium  ${props.class}`;
});

const emit = defineEmits(["click"]);
const handleClick = (event: MouseEvent) => {
	emit("click", event);
};
</script>

<template>
	<button ref="button" :class="btnClasses" @click="handleClick">
		<span class="relative z-10"><slot></slot></span>
	</button>
</template>

<style scoped>
.btn {
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
		top: 0;
		right: 40%;
		width: 260px;
		height: 260px;
		border-radius: 100%;
		transform: translate3d(-50%, 100%, 0) scale3d(0, 0, 0);
		transition:
			opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1),
			transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
		opacity: 0;
	}

	&:hover {
		span {
			color: white;
		}

		&:before {
			opacity: 1;
			transition-duration: 0.85s;
			transform: translate3d(50%, -50%, 0) scale3d(1.2, 1.2, 1.2);
		}
	}
}
</style>
