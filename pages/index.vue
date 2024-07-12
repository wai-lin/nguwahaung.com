<template>
	<section gsap="hero" class="h-screen max-h-screen bg-yellow-200">
		<h1 align="center">Hero 1</h1>

		<div class="absolute inset-0 flex items-center justify-center gap-10">
			<div gsap="hero-white_bg" class="absolute h-screen w-full bg-white">
				<div
					gsap="hero-cotent"
					class="container mx-auto mt-8 space-y-8 px-4 opacity-100 lg:mt-40 lg:px-8"
				>
					<h1 align="center" class="text-3xl font-black lg:text-6xl">
						Industries I specialize in
					</h1>
					<p align="center">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde
						aperiam ratione sit, doloremque et dolorem? Tempora consequatur
						odit, quaerat dolore, earum ipsa fuga consectetur asperiores enim
						quisquam ea aperiam.
					</p>
				</div>
			</div>

			<div
				gsap="hero-card_hidden"
				class="z-10 hidden h-[320px] w-1/5 translate-y-40 rounded-lg bg-gray-200 opacity-100 lg:block"
			></div>
			<div
				gsap="hero-card"
				class="z-10 h-[280px] w-4/5 translate-y-36 rounded-lg border-2 border-gray-400 bg-gray-400 bg-opacity-20 lg:h-[360px] lg:w-[400px] lg:translate-y-44"
			></div>
			<div
				gsap="hero-card_hidden"
				class="z-10 hidden h-[320px] w-1/5 translate-y-40 rounded-lg bg-gray-200 opacity-100 lg:block"
			></div>
		</div>
	</section>

	<section class="hero2 h-screen max-h-screen bg-red-300">Section 2</section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSetSeoMeta } from "~/data/SEO";

useSetSeoMeta();

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
			borderRadius: "0.75rem",
		})
		.from(`[gsap="hero-card"]`, {
			translateY: 0,
			width: "75%",
			height: "500px",
			ease: "sine",
		})
		.from(`[gsap="hero-card_hidden"]`, {
			y: 0,
			opacity: 0,
			ease: "sine",
		});
});
</script>
