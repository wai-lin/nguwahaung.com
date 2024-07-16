<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref } from "vue";
import { Professions } from "~/data/Professions";
import { HeroSection } from "~/data/HeroSection";
import { Industries } from "~/data/Industries";
import { useSetSeoMeta } from "~/data/SEO";

useSetSeoMeta();
console.log(HeroSection);

// const prefersReducedMotion = ref(false);

// const projectImages = [
// 	"https://uizard.io/static/9b3b663d3ac0e2bdc1403bdc496bb3ae/0cfa7/6b04c1f699eb8a263e99a78da374d2e152a78b28-1440x835.webp",
// 	"https://uizard.io/static/59d2127f1710ac592be41e29fbe77e71/0cfa7/8d873c59ca702967ba226106db29f25ca4c74bc5-1440x835.webp",
// 	"https://uizard.io/static/5d4306fb31cb1acd99e583551daf4ceb/0cfa7/2f0a67de75a2983c83a4ae13c8a588f33749722a-1440x835.webp",
// ];

// function revealImage(index: number) {
// 	document.querySelector(`#slide-${index}`)?.classList.add("active");
// }

// function hideImage(index: number) {
// 	document
// 		.querySelector(`#slide-${index}`)
// 		?.classList.replace("active", "deactive");
// 	setTimeout(function () {
// 		document.querySelector(`#slide-${index}`)?.classList.remove("deactive");
// 	}, 600);
// }

// const heroTitle = ref(null);

onMounted(() => {
	// Register plugins first
	gsap.registerPlugin(ScrollTrigger, TextPlugin, Flip);

	// gsap.to(heroTitle.value, {
	// 	duration: 1.5,
	// 	text: HeroSection.focusContent,
	// 	ease: "power1.out",
	// });

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

	gsap.set(".flair", { xPercent: -50, yPercent: -50 });

	let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
		yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

	window.addEventListener("mousemove", (e) => {
		xTo(e.clientX);
		yTo(e.clientY);
	});
});
</script>

<template>
	<Header class="text-white" />

	<section
		gsap="hero-section"
		class="relative h-screen w-screen overflow-hidden lg:relative"
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

		<div class="container absolute inset-0 py-4">
			<div class="pt-10">
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
		</div>
	</section>

	<section class="container sticky bg-light pt-20">
		<div class="grid grid-cols-4 gap-8">
			<div class="col-span-4 md:col-span-2">
				<h1 class="hero-title leading-tight">
					{{ Industries.title }}
				</h1>
				<p ref="heroSubtitle" class="mb-8 text-sm font-medium text-primary-500">
					{{ Industries.subtitle }}
				</p>
				<p class="text-content">
					{{ Industries.description }}
				</p>

				<Button class="mt-10" @click="navigateTo('/case-study')">
					View case study
				</Button>
			</div>

			<div class="col-span-4 md:col-span-2">
				<ProfessionCard
					v-for="profession in Industries.professions"
					:key="profession.title"
					:title="profession.title"
					:img-url="profession.imgUrl"
				/>
			</div>
		</div>
	</section>

	<section class="container pt-40">
		<h1 ref="footerTitle" class="hero-title my-6 font-extrabold text-gray-800">
			Let's Chat
		</h1>

		<div class="my-28 grid grid-cols-6 gap-10">
			<div
				class="col-span-6 p-0 sm:col-span-3 md:col-span-3 lg:col-span-2"
				v-for="(card, index) in Professions"
			>
				<div>
					<div class="flex justify-between">
						<h5
							class="text-lg font-semibold uppercase text-primary-500 md:text-title-md"
						>
							{{ card.title }}
						</h5>
						<span class="text-md text-light-dark">0{{ index + 1 }}</span>
					</div>
				</div>
				<hr class="my-2 border-gray-600 md:mb-8 md:mt-5" />
				<p class="text-dark">{{ card.content }}</p>
			</div>
		</div>

		<div class="inline-block">
			<Button type="primary">CONTACT ME VIA EMAIL</Button>
		</div>
	</section>

	<Footer />
</template>
