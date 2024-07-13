<template>
	<section gsap="hero" class="h-screen max-h-screen bg-yellow-200">
		<h1 align="center">Hero 1</h1>

		<div class="absolute inset-0 flex items-center justify-center gap-10">
			<div gsap="hero-white_bg" class="absolute h-screen w-full bg-white">
				<div class="container mx-auto mt-40 space-y-8 px-8">
					<h1 align="center" class="text-6xl font-black">
						Industries I specialize in
					</h1>
					<p align="center">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde
						aperiam ratione sit, doloremque et dolorem? Tempora consequatur
						odit, quaerat dolore, earum ipsa fuga consectetur asperiores enim
						quisquam ea aperiam. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Distinctio omnis dolor, similique consectetur
						expedita fuga doloribus at pariatur sequi odio quia laudantium nemo
						enim ea, repellat quaerat itaque quibusdam obcaecati?
					</p>
				</div>
			</div>

			<div
				gsap="hero-card_hidden"
				class="z-10 h-[360px] w-1/5 translate-y-40 rounded-lg bg-gray-200 opacity-100"
			></div>
			<div
				gsap="hero-card"
				class="z-10 h-[400px] w-1/4 translate-y-40 rounded-lg border-2 border-gray-400 bg-gray-400 bg-opacity-20"
			></div>
			<div
				gsap="hero-card_hidden"
				class="z-10 h-[360px] w-1/5 translate-y-40 rounded-lg bg-gray-200 opacity-100"
			></div>
		</div>
	</section>

	<section class="hero2 h-screen max-h-screen bg-gray-50">
		<div class="grid h-full grid-cols-4 gap-8 p-8 text-gray-700">
			<div class="col-span-2">
				<h2 class="text-[4em] font-semibold">Proud projects</h2>
				<p class="font-normal">
					Below is a few of my most recent projects. To view all work, <br />
					head over to the projects page.
				</p>

				<div class="project-thumbnail direction_right mt-6">
					<div
						v-for="(img, index) in projectImages"
						:id="'slide-' + (index + 1)"
						class="slide custom-transition absolute left-0 top-0 h-full w-full bg-gray-200 py-3 pl-3 pr-6"
					>
						<img
							:src="img"
							alt=""
							class="custom-scale custom-transition h-full w-full transform object-cover object-center p-2.5"
						/>
					</div>
				</div>
			</div>

			<div class="col-span-2 flex h-full flex-col justify-center">
				<div class="projects">
					<div
						class="project relative flex justify-between border-b border-b-gray-200 px-4 py-8 transition-all ease-in-out before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-gray-600 before:transition-all before:duration-500 hover:before:w-full"
						v-for="(img, index) in projectImages"
						:data-ref="index + 1"
						@mouseenter="revealImage(index + 1)"
						@mouseleave="hideImage(index + 1)"
					>
						<h4 class="text-3xl font-semibold">Title</h4>
						<p>Web design, Art direction, Banking portal</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="flair flair--3"></div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSetSeoMeta } from "~/data/SEO";

useSetSeoMeta();

const projectImages = [
	"https://uizard.io/static/9b3b663d3ac0e2bdc1403bdc496bb3ae/0cfa7/6b04c1f699eb8a263e99a78da374d2e152a78b28-1440x835.webp",
	"https://uizard.io/static/59d2127f1710ac592be41e29fbe77e71/0cfa7/8d873c59ca702967ba226106db29f25ca4c74bc5-1440x835.webp",
	"https://uizard.io/static/5d4306fb31cb1acd99e583551daf4ceb/0cfa7/2f0a67de75a2983c83a4ae13c8a588f33749722a-1440x835.webp",
];

function revealImage(index) {
	document.querySelector(`#slide-${index}`).classList.add("active");
}

function hideImage(index) {
	document
		.querySelector(`#slide-${index}`)
		.classList.replace("active", "deactive");
	setTimeout(function () {
		document.querySelector(`#slide-${index}`).classList.remove("deactive");
	}, 600);
}

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

	gsap.set(".flair", { xPercent: -50, yPercent: -50 });

	let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
		yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

	window.addEventListener("mousemove", (e) => {
		xTo(e.clientX);
		yTo(e.clientY);
	});
});
</script>

<style lang="css">
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
	width: 85%;
	height: 500px;
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
