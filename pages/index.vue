<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "~/data/HeroSection";
import { Industries } from "~/data/Industries";
import { useSetSeoMeta } from "~/data/SEO";

useSetSeoMeta();

const prefersReducedMotion = ref(false);

onMounted(() => {
	// Register plugins first
	gsap.registerPlugin(ScrollTrigger);

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

			// const noAnimation = reducedAnimation || prefersReducedMotion.value;
			// if (noAnimation) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: `[gsap="scroll-trigger"]`,
					pin: true,
					scrub: true,
					start: "top top",
					end: isSmallScreen ? "end end" : "+=120%",
				},
			});

			tl.to(`[gsap="reveal"]`, {
				transformOrigin: "center",
				scale: isLargeScreen ? 1 : "",
				height: isLargeScreen ? "100%" : "",
				ease: "sine.in",
			})
				.to(`[gsap="gradient-card"]`, {
					translateY: isLargeScreen ? 20 : "",
					opacity: isLargeScreen ? 0 : "",
					scale: isLargeScreen ? 0.5 : 1,
					zIndex: 0,
					ease: "sine.in",
				})
				.from(`[gsap="profession-card"]`, {
					scale: 0,
					ease: "sine.out",
				})
				.to(`[gsap="reveal-2"]`, {
					opacity: isLargeScreen ? 1 : "",
					ease: "sine.in",
				});
		},
	);
});
</script>

<template>
	<Header class="text-white" />

	<section
		gsap="scroll-trigger"
		class="sticky top-0 h-screen w-screen overflow-hidden lg:relative"
	>
		<img
			alt=""
			aria-hidden
			:src="HeroSection.backdropImage"
			class="h-full w-full object-cover object-[80%_50%] lg:object-center"
		/>

		<div class="lg:pt-30 absolute inset-0 pt-20">
			<h6
				class="container mx-auto mb-8 px-4 text-title-lg font-bold lg:mb-10 lg:px-10"
			>
				{{ HeroSection.title }}
			</h6>

			<div gsap="reveal" class="absolute inset-0 scale-0 bg-light">
				<div class="container mx-auto py-20">
					<h1
						gsap="reveal-2"
						class="mb-4 text-center text-header font-bold leading-tight opacity-0"
					>
						{{ Industries.title }}
					</h1>
					<p
						gsap="reveal-2"
						class="mx-auto max-w-[800px] text-center opacity-0"
					>
						{{ Industries.description }}
					</p>

					<div class="relative flex items-center justify-center">
						<ProfessionCard
							gsap="profession-card"
							:title="Industries.professions[1].title"
							:img-url="Industries.professions[1].imgUrl"
							class="absolute left-20 top-20 z-0 blur-[1px]"
						/>
						<ProfessionCard
							gsap="profession-card"
							:title="Industries.professions[0].title"
							:img-url="Industries.professions[0].imgUrl"
							class="absolute top-20 z-10 scale-125"
						/>
						<ProfessionCard
							gsap="profession-card"
							:title="Industries.professions[2].title"
							:img-url="Industries.professions[2].imgUrl"
							class="absolute right-20 top-20 z-0 blur-[1px]"
						/>
					</div>
				</div>
			</div>

			<article
				gsap="gradient-card"
				class="gradient-border-mask mx-auto h-[fit-content] w-4/5 p-10 backdrop-blur-sm lg:w-3/4 lg:p-20"
			>
				<h1
					class="text-title-lg font-bold text-light lg:text-header lg:leading-none lg:text-dark"
				>
					{{ HeroSection.focusContent }}
				</h1>
			</article>
		</div>
	</section>

	<section class="sticky bg-light px-4 py-10 lg:hidden">
		<h1 class="pb-4 text-title-lg font-bold leading-none">
			{{ Industries.title }}
		</h1>
		<p class="mb-4">
			{{ Industries.description }}
		</p>

		<div class="flex flex-col items-center justify-center gap-4">
			<ProfessionCard
				v-for="profession in Industries.professions"
				:key="profession.title"
				:title="profession.title"
				:img-url="profession.imgUrl"
			/>
		</div>
	</section>

	<section class="h-screen w-screen bg-primary-400"></section>

	<Footer />
</template>

<style>
.gradient-border-mask::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 35px;
	border: 5px solid transparent;
	background: linear-gradient(90deg, #f5029494, white) border-box;
	mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	-webkit-mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out;
	mask-composite: exclude;
}
</style>
