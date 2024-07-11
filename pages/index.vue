<template>
	<section gsap="hero" class="h-screen max-h-screen bg-yellow-200">
		<h1 align="center">Hero 1</h1>

		<div class="absolute inset-0 flex items-center justify-center gap-10">
			<div gsap="hero-white_bg" class="absolute h-screen w-full bg-white"></div>

			<div
				gsap="hero-card_hidden"
				class="z-10 h-[360px] w-1/5 rounded-lg bg-gray-200 opacity-100"
			></div>
			<div
				gsap="hero-card"
				class="z-10 h-[500px] w-1/5 rounded-lg border-2 border-gray-400 bg-gray-400 bg-opacity-20"
			></div>
			<div
				gsap="hero-card_hidden"
				class="z-10 h-[360px] w-1/5 rounded-lg bg-gray-200 opacity-100"
			></div>
		</div>
	</section>

	<section class="hero2 h-screen max-h-screen bg-red-300">Hero 2</section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	const hero_tl = gsap.timeline({
		scrollTrigger: {
			trigger: `[gsap="hero"]`,
			scrub: true,
			pin: true,
			start: "top top",
			end: "+=100%",
		},
	});

	hero_tl
		.from(`[gsap="hero-white_bg"]`, {
			scale: 1,
			width: "62%",
			height: "500px",
			transformOrigin: "center center",
			ease: "sine",
			borderRadius: "0.5rem",
		})
		.from(`[gsap="hero-card"]`, {
			width: "75%",
			ease: "sine",
		})
		.from(`[gsap="hero-card_hidden"]`, {
			y: "20%",
			opacity: 0,
			ease: "sine",
		});
});
</script>
