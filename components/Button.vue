<script setup lang="ts">
import { computed, defineEmits, defineProps } from "vue";

const props = defineProps({
	type: {
		type: String,
		default: "primary",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["click"]);

// Computed property for button class
const buttonClass = computed(() => {
	const baseClasses =
		"relative overflow-hidden px-4 py-2 rounded-full font-semibold border-2";
	const typeClasses = {
		primary: "bg-white text-gray-600 border-gray-600 hover:text-primary-500",
		secondary: "bg-transparent text-gray-500 border-gray-500 hover:text-white",
		success: "bg-transparent text-green-500 border-green-500 hover:text-white",
		danger: "bg-transparent text-red-500 border-red-500 hover:text-white",
		ghost: "bg-transparent text-gray-800 border-gray-500 hover:text-white",
	};
	const disabledClasses = "opacity-50 cursor-not-allowed";

	return `${baseClasses} ${typeClasses[props.type]} ${props.disabled ? disabledClasses : ""}`;
});

const handleClick = (event) => {
	emit("click", event);
};
</script>

<template>
	<button :class="buttonClass" :disabled="disabled" @click="handleClick">
		<slot></slot>
	</button>
</template>

<style lang="css">
button {
	position: relative;
	display: inline-block;
	overflow: hidden;
}

button div {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: transform 0.5s ease;
}

button:hover div {
	transform: scaleX(1);
}
</style>
