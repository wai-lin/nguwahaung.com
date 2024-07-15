<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMe } from "~/data/AboutMe";
import { HeroSection } from "~/data/HeroSection";
import { Industries } from "~/data/Industries";
import { useSetSeoMeta } from "~/data/SEO";

useSetSeoMeta();

const prefersReducedMotion = ref(false);

const projectImages = [
	"https://uizard.io/static/9b3b663d3ac0e2bdc1403bdc496bb3ae/0cfa7/6b04c1f699eb8a263e99a78da374d2e152a78b28-1440x835.webp",
	"https://uizard.io/static/59d2127f1710ac592be41e29fbe77e71/0cfa7/8d873c59ca702967ba226106db29f25ca4c74bc5-1440x835.webp",
	"https://uizard.io/static/5d4306fb31cb1acd99e583551daf4ceb/0cfa7/2f0a67de75a2983c83a4ae13c8a588f33749722a-1440x835.webp",
];

function revealImage(index: number) {
	document.querySelector(`#slide-${index}`)?.classList.add("active");
}

function hideImage(index: number) {
	document
		.querySelector(`#slide-${index}`)
		?.classList.replace("active", "deactive");
	setTimeout(function () {
		document.querySelector(`#slide-${index}`)?.classList.remove("deactive");
	}, 600);
}

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
		gsap="scroll-trigger"
		class="sticky top-0 h-screen w-screen overflow-hidden lg:relative"
	>
		<img
			alt=""
			aria-hidden
			:src="HeroSection.backdropImage"
			class="h-full w-full object-cover object-[80%_50%] lg:object-center"
		/>

		<div class="absolute inset-0 py-4">
			<h6 class="container mx-auto mb-8 px-16 text-title-lg font-bold lg:mb-10">
				{{ HeroSection.title }}
			</h6>

			<div gsap="reveal" class="absolute inset-0 scale-0 bg-light">
				<div class="container mx-auto py-10">
					<h1
						gsap="reveal-2"
						class="text-header font-bold leading-tight opacity-0"
					>
						{{ Industries.title }}
					</h1>
					<p gsap="reveal-2" class="mb-8 text-sm text-primary-500 opacity-0">
						{{ Industries.subtitle }}
					</p>
					<p
						gsap="reveal-2"
						class="text-2xl font-medium tracking-wide opacity-0"
					>
						{{ Industries.description }}
					</p>

					<Button gsap="reveal-2" class="mt-10 opacity-0">
						<RouterLink to="/case-study"> View case study </RouterLink>
					</Button>

					<div class="relative flex items-center justify-center py-10">
						<ProfessionCard
							gsap="profession-card"
							:title="Industries.professions[0].title"
							:img-url="Industries.professions[0].imgUrl"
						/>
					</div>
				</div>
			</div>

			<article
				gsap="gradient-card"
				class="flex h-full w-4/5 items-center p-10 backdrop-blur-sm lg:w-3/4 lg:p-20"
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
		<p class="mb-4 text-primary-500">
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

	<!-- <section class="container mx-auto px-4 py-32">
		<span v-if="false">{{ AboutMe }}</span>
		<h4 class="mb-4 text-body font-medium lg:text-title-md">About me</h4>

		<ClientOnly>
			<p class="text-justify text-title-md leading-loose lg:text-title-lg">
				<template
					v-for="(desc, index) in AboutMe.description"
					:key="`about_me-${index}`"
				>
					<span v-if="typeof desc === 'string'" class="pr-2">{{ desc }} </span>
					<RadialImgText v-else v-bind="desc" class="pr-2" />
				</template>
			</p>
		</ClientOnly>

		<div class="mt-10 flex items-center justify-end">
			<RouterLink to="" class="text-primary-500 hover:text-primary-400">
				<IconArrow />
			</RouterLink>
		</div>
	</section> -->

	<!-- <section class="container mx-auto mb-8 h-screen">
		<div class="text-gray-700 grid h-full grid-cols-4 gap-2 py-8 md:gap-8">
			<div class="col-span-4 my-auto md:col-span-2 md:my-0 md:h-full">
				<h2 class="sm:text-title-xl text-title-lg font-semibold lg:text-header">
					Proud projects
				</h2>
				<p class="text-sm mt-4 font-normal lg:text-body">
					Below is a few of my most recent projects. To view all work, <br />
					head over to the projects page.
				</p>

				<div
					class="project-thumbnail direction_right mt-6 hidden h-72 w-full md:block lg:h-[500px] lg:w-4/5"
				>
					<div
						v-for="(img, index) in projectImages"
						:id="'slide-' + (index + 1)"
						class="slide custom-transition bg-gray-200 absolute left-0 top-0 h-full w-full py-3 pl-3 pr-6"
					>
						<img
							:src="img"
							alt=""
							class="custom-scale custom-transition h-full w-full transform object-cover object-center p-2.5"
						/>
					</div>
				</div>
			</div>

			<div class="col-span-4 flex h-full flex-col justify-center md:col-span-2">
				<div class="projects">
					<div
						class="project border-b-gray-200 after:bg-gray-600 relative flex-col justify-between border-b px-0 py-2 transition-all ease-in-out md:flex md:px-4 md:py-8 lg:flex-row lg:items-center lg:py-8"
						v-for="(img, index) in projectImages"
						:data-ref="index + 1"
						@mouseenter="revealImage(index + 1)"
						@mouseleave="hideImage(index + 1)"
					>
						<h4
							class="text-title-md font-semibold md:text-title-md lg:text-title-lg"
						>
							{{ index + 1 }}. Project
						</h4>
						<p class="text-sm">Web design, Art direction, Banking portal</p>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<div class="flair flair--3"></div>

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

.flair {
	width: 50px;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	pointer-events: none;
	border: 2px solid rgb(212 212 216);
	border-radius: 100%;
}

.projects:hover > * {
	opacity: 0.3;
}

.projects > *:hover {
	opacity: 1;
}

.project-thumbnail {
	grid-row: 1;
	overflow: hidden;
	position: relative;
}

.custom-transition {
	transition: clip-path 0.6s cubic-bezier(0.87, 0, 0.13, 1);
}

.project-thumbnail .slide img {
	transform: scale(1.4);
	transition: transform 4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-thumbnail .slide.active img,
.project-thumbnail .slide.deactive img {
	transform: scale(1);
}

.project-thumbnail.direction_right .slide {
	clip-path: inset(0 100% 0 0);
}

.project-thumbnail.direction_right .slide.deactive {
	clip-path: inset(0 0 0 100%);
}

.project-thumbnail.direction_right .slide.active {
	clip-path: inset(0 0 0 0);
	z-index: 98;
}

.projects .project:after {
	transition: width 0.6s cubic-bezier(0.87, 0, 0.13, 1);
}
</style>
