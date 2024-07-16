<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref } from "vue";
import { HeroSection } from "~/data/HeroSection";
import { Professions } from "~/data/Professions";
import { useSetSeoMeta } from "~/data/SEO";
import { Showcase } from "~/data/Showcase";

useSetSeoMeta();
console.log(HeroSection, Professions);

onMounted(() => {
	// Register plugins first
	gsap.registerPlugin(ScrollTrigger, TextPlugin, Flip);

	// Trigger animations based on Media Query
	type MediaConditions = {
		isSmallScreen: boolean;
		isLargeScreen: boolean;
		reducedAnimation: boolean;
	};
	const media = gsap.matchMedia();
	media.add(
		{
			isSmallScreen: "(max-width: 1023px)",
			isLargeScreen: "(min-width: 1024px)",
			reducedAnimation: "(prefers-reduced-motion: no-preference)",
		},
		(ctx) => {
			const { isSmallScreen, isLargeScreen, reducedAnimation } =
				ctx.conditions as MediaConditions;

			ScrollTrigger.defaults({
				toggleActions: "restart pause resume pause",
				scroller: `[gsap="scroller"]`,
			});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: `[gsap="showcase-section"]`,
						scrub: false,
						snap: `labels`,
					},
				})
				.from(`[gsap="showcase-text"]`, {
					y: isLargeScreen ? -100 : "",
					x: isLargeScreen ? -100 : "",
					opacity: isLargeScreen ? 0 : "",
					ease: "sine.out",
				})
				.from(`[gsap="showcase-image"]`, {
					y: isLargeScreen ? 100 : "",
					x: isLargeScreen ? 100 : "",
					opacity: isLargeScreen ? 0 : "",
					ease: "sine.out",
				});
		},
	);
});
</script>

<template>
	<Header class="text-white" />

	<div
		gsap="scroller"
		class="h-screen snap-y snap-mandatory overflow-auto scroll-smooth"
	>
		<section
			gsap="hero-section"
			class="relative h-screen w-screen snap-start overflow-hidden lg:relative"
		>
			<img
				alt=""
				aria-hidden
				:src="HeroSection.backdropImage"
				class="h-full w-full object-cover object-[80%_50%] lg:object-center"
			/>
			<img
				:src="HeroSection.profileImage"
				class="absolute -bottom-1 -right-10 w-60 md:w-80 lg:right-10 lg:w-96"
			/>

			<div class="container absolute inset-0 pt-16">
				<h1
					ref="heroTitle"
					class="hero-title mt-16 min-h-0 md:mt-16 md:min-h-72 lg:mt-28"
				>
					EXPERIENCED <br />
					PRODUCT DESIGNER <br />& DEVELOPER <br />
					BASED IN BANGKOK
				</h1>

				<Button
					class="mt-10 bg-transparent uppercase"
					@click="navigateTo('/case-study')"
				>
					View case study
				</Button>
			</div>
		</section>

		<section
			gsap="showcase-section"
			class="container flex min-h-screen w-screen snap-start items-center bg-light py-10 lg:py-0"
		>
			<div class="grid grid-cols-4 gap-8">
				<div gsap="showcase-text" class="col-span-4 md:col-span-2">
					<h1 class="hero-title leading-tight">
						{{ Showcase.title }}
					</h1>
					<p
						ref="heroSubtitle"
						class="mb-8 text-sm font-medium text-primary-500"
					>
						{{ Showcase.subtitle }}
					</p>
					<p class="text-content">
						{{ Showcase.description }}
					</p>

					<Button class="mt-10" @click="navigateTo('/case-study')">
						View case study
					</Button>
				</div>

				<div
					gsap="showcase-image"
					class="col-span-4 grid place-items-center md:col-span-2"
				>
					<video loop muted autoplay preload="auto">
						<source src="https://nguwahaung.com/videos/showcase.mp4" />
						<source src="http://localhost:3000/videos/showcase.mp4" />
					</video>
				</div>
			</div>
		</section>

		<section gsap="professions-section" class="container snap-center pt-20">
			<h1
				gsap="professions-title"
				class="hero-title my-6 font-extrabold text-gray-800"
			>
				{{ Professions.title }}
			</h1>

			<div class="my-28 grid grid-cols-6 gap-10">
				<div
					v-for="(card, index) in Professions.value"
					:key="card.title"
					:gsap="`profession-card_${index}`"
					class="col-span-6 p-0 sm:col-span-3 md:col-span-3 lg:col-span-2"
				>
					<div class="flex justify-between">
						<h5
							class="text-lg font-semibold uppercase text-primary-500 md:text-title-md"
						>
							{{ card.title }}
						</h5>
						<span class="text-md text-light-dark">0{{ index + 1 }}</span>
					</div>
					<hr class="my-2 border-gray-600 md:mb-8 md:mt-5" />
					<p class="text-dark">{{ card.content }}</p>
				</div>
			</div>

			<div class="inline-block">
				<Button type="primary">CONTACT ME VIA EMAIL</Button>
			</div>

			<div class="py-10" />

			<Footer />
		</section>
	</div>
</template>
