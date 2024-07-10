<template>
	<section class="hero1 h-screen max-h-screen bg-yellow-200">
		<h1>Hero 1</h1>

		<div class="hero1-box absolute inset-0 bg-white"></div>
	</section>
	<section class="hero2 h-screen max-h-screen bg-red-300">Hero 2</section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from(".hero1-box", {
		scale: 0,
		transformOrigin: "center bottom",
		ease: "back.inOut",
		borderRadius: "50rem",
		scrollTrigger: {
			trigger: ".hero1",
			scrub: true,
			pin: true,
			start: "top top",
			end: "+=100%",
		},
	});
});
</script>
