<script lang="ts" setup>
import gsap from "gsap";
import { ref } from "vue";

const magnetic = ref<HTMLElement | null>(null);

onMounted(() => {
	const xTo = gsap.quickTo(magnetic.value, "x", {
		duration: 1,
		ease: "elastic.out(1, 0.3)",
	});
	const yTo = gsap.quickTo(magnetic.value, "y", {
		duration: 1,
		ease: "elastic.out(1, 0.3)",
	});

	const mouseMove = (e: MouseEvent) => {
		if (magnetic.value) {
			const { clientX, clientY } = e;
			const { height, width, left, top } =
				magnetic.value?.getBoundingClientRect();
			const x = clientX - (left + width / 2);
			const y = clientY - (top + height / 2);
			xTo(x);
			yTo(y);
		}
	};

	const mouseLeave = () => {
		gsap.to(magnetic.value, { x: 0, duration: 1 });
		gsap.to(magnetic.value, { y: 0, duration: 1 });
		xTo(0);
		yTo(0);
	};

	magnetic.value?.addEventListener("mousemove", mouseMove);
	magnetic.value?.addEventListener("mouseleave", mouseLeave);

	onUnmounted(() => {
		magnetic.value?.removeEventListener("mousemove", mouseMove);
		magnetic.value?.removeEventListener("mouseleave", mouseLeave);
	});
});
</script>

<template>
	<div ref="magnetic" class="flex items-center justify-center">
		<slot></slot>
	</div>
</template>
