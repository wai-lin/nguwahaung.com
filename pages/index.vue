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

function skewBackdrop() {
	let xTo = gsap.quickTo(`[gsap="hero-backdrop_img"]`, "x", {
			transformOrigin: "center",
			duration: 0.4,
			ease: "power3",
		}),
		yTo = gsap.quickTo(`[gsap="hero-backdrop_img"]`, "y", {
			transformOrigin: "center",
			duration: 0.4,
			ease: "power3",
		});

	document
		.querySelector(`[gsap="hero-section"]`)
		?.addEventListener("mousemove", (e: any) => {
			const { clientX, clientY } = e;
			const boundingRect = document
				.querySelector(`[gsap="hero-backdrop_img"]`)
				?.getBoundingClientRect();

			const height = boundingRect?.height || 0;
			const width = boundingRect?.width || 0;
			const left = boundingRect?.left || 0;
			const top = boundingRect?.top || 0;

			const centerX = width / 2;
			const centerY = height / 2;

			let x = 0,
				y = 0;
			const cursorDiff = {
				x: centerX - clientX,
				y: centerY - clientY,
			};

			if (cursorDiff.x < 0) x = -20;
			else if (cursorDiff.x > 0) x = 20;

			if (cursorDiff.y < 0) y = -20;
			else if (cursorDiff.y > 0) y = 20;

			xTo(Number(x || 0));
			yTo(Number(y || 0));
		});
}

const email = "nguwah106@gmail.com";

onMounted(() => {
	// Register plugins first
	gsap.registerPlugin(ScrollTrigger, TextPlugin, Flip);

	// skewBackdrop();

	// Trigger animations based on Media Query
	type MediaConditions = {
		isSmallScreen: boolean;
		isLargeScreen: boolean;
		reducedAnimation: boolean;
	};
	gsap.matchMedia().add(
		{
			isSmallScreen: "(max-width: 1023px)",
			isLargeScreen: "(min-width: 1024px)",
			reducedAnimation: "(prefers-reduced-motion: no-preference)",
		},
		(ctx) => {
			const { isSmallScreen, isLargeScreen, reducedAnimation } =
				ctx.conditions as MediaConditions;

			function changeHeaderOnScrollSection() {
				function updateValues() {
					const isOnTop = ScrollTrigger.isInViewport(`[gsap="hero-section"]`);
					if (isOnTop) {
						gsap.to(`[gsap="header"]`, {
							background: "transparent",
							duration: 0.5,
							ease: "power2",
						});
					} else {
						gsap.to(`[gsap="header"]`, {
							background: "white",
							duration: 0.5,
							ease: "power2",
						});
					}
				}

				ScrollTrigger.create({
					start: 0,
					end: "max",
					scroller: `[gsap="scroller"]`,
					onUpdate: updateValues,
				});

				updateValues();
			}

			function animateHeroSection() {
				gsap
					.timeline()
					.from(
						`[gsap="hero-backdrop_img"]`,
						{
							scaleX: 1.5,
							scaleY: 1.5,
							duration: 1,
							ease: "sine.out",
						},
						"start",
					)
					.from(
						`[gsap="hero-profile"]`,
						{
							scale: 0.98,
							opacity: 0.8,
							duration: 1,
							ease: "sine.out",
						},
						"start",
					)
					.from(
						`[gsap="hero-title"]`,
						{
							y: -50,
							x: -50,
							opacity: 0,
							duration: 1,
							ease: "sine.out",
						},
						"start",
					)
					.from(
						`[gsap="hero-study-btn"]`,
						{
							y: 50,
							x: -50,
							opacity: 0,
							duration: 1,
							ease: "sine.out",
						},
						"start",
					);
			}

			function animateShowcaseSection() {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: `[gsap="showcase-section"]`,
							toggleActions: "restart pause resume pause",
							scroller: `[gsap="scroller"]`,
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
			}

			function animateProfessionSection() {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: `[gsap="professions-section"]`,
							toggleActions: "restart pause resume pause",
							scroller: `[gsap="scroller"]`,
						},
					})
					.from(`[gsap="professions-title"]`, {
						y: -50,
						x: -100,
						opacity: 0,
						duration: 0.5,
						ease: "sine.out",
					})
					.from(`[gsap="profession-card_0"]`, {
						y: -50,
						opacity: 0,
						ease: "sine.out",
					})
					.from(`[gsap="profession-card_1"]`, {
						y: -50,
						opacity: 0,
						ease: "sine.out",
					})
					.from(`[gsap="profession-card_2"]`, {
						y: -50,
						opacity: 0,
						ease: "sine.out",
					})
					.from(`[gsap="contact-email-btn"]`, {
						x: -100,
						opacity: 0,
						ease: "sine.out",
					});
			}

			changeHeaderOnScrollSection();
			animateHeroSection();
			animateShowcaseSection();
			animateProfessionSection();
		},
	);
});
</script>

<template>
	<Header gsap="header" />

	<div
		gsap="scroller"
		id="scroller"
		class="h-screen snap-y snap-mandatory overflow-auto scroll-smooth"
	>
		<section
			gsap="hero-section"
			class="relative h-screen w-screen snap-start overflow-hidden lg:relative"
		>
			<img
				gsap="hero-backdrop_img"
				alt=""
				aria-hidden
				:src="HeroSection.backdropImage"
				class="h-full w-full scale-110 object-cover object-center"
			/>
			<img
				gsap="hero-profile"
				:src="HeroSection.profileImage"
				class="absolute -bottom-1 -right-10 w-60 md:w-80 lg:right-0 lg:w-[450px]"
			/>

			<div class="container absolute inset-0 pt-16">
				<SmokeCursor
					class="absolute inset-0 hidden h-full w-full opacity-5 lg:block"
				/>

				<h1
					gsap="hero-title"
					class="hero-title mt-16 min-h-0 -space-y-3 md:mt-16 md:min-h-72 lg:mt-28"
				>
					<p>EXPERIENCED</p>
					<p>PRODUCT DESIGNER</p>
					<p>& DEVELOPER</p>
					<p>BASED IN BANGKOK</p>
				</h1>

				<div gsap="hero-study-btn" class="mt-10 inline-block">
					<Magnetic>
						<Button
							class="bg-transparent uppercase"
							@click="navigateTo('/case-study')"
						>
							View case study
						</Button>
					</Magnetic>
				</div>
			</div>
		</section>

		<section
			id="showcase-section"
			gsap="showcase-section"
			class="container flex min-h-screen w-screen snap-start items-center bg-light py-10 lg:py-0"
		>
			<div class="grid grid-cols-4 gap-8">
				<div gsap="showcase-text" class="col-span-4 md:col-span-2 md:pr-16">
					<h1 class="hero-title leading-tight">
						{{ Showcase.title }}
					</h1>
					<p
						ref="heroSubtitle"
						class="mb-8 text-xl font-medium leading-[18px] text-primary-500"
					>
						{{ Showcase.subtitle }}
					</p>
					<p class="text-content">
						{{ Showcase.description }}
					</p>

					<div class="mt-10 inline-block">
						<Magnetic>
							<Button class="uppercase" @click="navigateTo('/case-study')">
								View case study
							</Button>
						</Magnetic>
					</div>
				</div>

				<div
					gsap="showcase-image"
					class="col-span-4 grid place-items-center md:col-span-2"
				>
					<img
						alt=""
						src="/public/images/home-thumbnail.png"
						class="h-auto w-full object-cover object-left-top"
					/>
					<!-- <YouTube
						loop
						autoplay
						:controls="false"
						url="https://www.youtube.com/embed/y948Nx9FCcU?si=THkYtovYBiO6eyER&amp;controls=0"
					/> -->
				</div>
			</div>
		</section>

		<section
			id="professions-section"
			gsap="professions-section"
			class="container snap-center pt-20"
		>
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
							class="text-xl font-semibold uppercase leading-[18px] text-primary-500 md:text-title-md"
						>
							{{ card.title }}
						</h5>
						<span class="text-md text-light-dark">0{{ index + 1 }}</span>
					</div>
					<hr class="my-2 border-[#dfdfdf] md:mb-8 md:mt-5" />
					<p class="text-dark">{{ card.content }}</p>
				</div>
			</div>

			<div gsap="contact-email-btn" class="inline-block">
				<Magnetic>
					<Button
						type="primary"
						@click="
							navigateTo('https://gmail.com/', {
								external: true,
								open: {
									target: '_blank',
									windowFeatures: {
										popup: true,
									},
								},
							})
						"
						>CONTACT ME VIA EMAIL</Button
					>
				</Magnetic>
			</div>

			<div class="py-8" />

			<div>
				<Footer />
			</div>
		</section>
	</div>
</template>
