<script setup lang="ts">
import gsap from "gsap";
import type { RadialImgText } from "~/data/AboutMe";

interface Props extends RadialImgText {}
const props = defineProps<Props>();
const slug = computed(() => props.label.toLowerCase().replaceAll(" ", "_"));

function placeImage(position: [number, number], size: [number, number]) {
	const x = position[0];
	const y = position[1];
	const width = size[0] + "px";
	const height = size[1] + "px";
	return { transform: `translate(${x}px, ${y}px)`, width, height };
}

onMounted(() => {
	const hidden = {
		scale: 0,
		opacity: 0,
		zIndex: -10,
	};
	const visible = {
		scale: 1,
		opacity: 1,
		zIndex: 10,
	};

	const target = document.querySelector(`[gsap="${slug.value}"]`);

	const images = gsap.utils.toArray(`[gsap="${slug.value}-image"]`);
	if (images.length <= 0) return;
	gsap.set(images, { ...hidden, transformOrigin: "center" });

	target?.addEventListener("mouseenter", () =>
		gsap.to(images, { ...visible, ease: "sine.out" }),
	);
	target?.addEventListener("mouseleave", () =>
		gsap.to(images, { ...hidden, ease: "sine.in" }),
	);
});
</script>

<template>
	<span class="relative inline-block">
		<em :gsap="slug" class="cursor-pointer text-primary-600">
			{{ props.label }}
		</em>

		<div
			v-for="(image, index) in props.images"
			:key="`${slug}-${index}`"
			:gsap="`${slug}-image`"
			class="absolute block overflow-hidden rounded-lg shadow-sm"
			:style="placeImage(image.position, image.size)"
		>
			<img :src="image.imgUrl" class="object-cover object-center" alt="" />
		</div>
	</span>
</template>
