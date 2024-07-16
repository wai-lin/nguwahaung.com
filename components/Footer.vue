<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { ref } from "vue";
import { Footer } from "~/data/Footer";

const footerTitle = ref(null);
const footerSubtitle = ref(null);
const footerSection = ref(null);

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(TextPlugin);

	const tl = gsap.timeline();

	tl.to(footerTitle.value, {
		duration: 2,
		ease: "power3.out",
		text: "LET'S CHAT",
		scrollTrigger: {
			trigger: "#footer-section",
			start: "top+=700 center",
			end: "bottom top+=300",
			scrub: true,
			// markers: true,
		},
		onComplete() {
			tl.to(footerSubtitle.value, {
				duration: 2.5,
				ease: "power1.in",
				text: "I'm a product designer with a passion for innovative design. I build scalable websites focused on seamless development. My expertise in branding ensures cohesive and compelling brand identities.",
			});
		},
	});
});
</script>

<template>
	<footer id="footer-section" class="container my-8">
		<h1
			ref="footerTitle"
			class="hero-title my-6 font-extrabold text-gray-800"
		></h1>

		<p ref="footerSubtitle" class="text-content tracking-normal"></p>

		<div class="my-28 grid grid-cols-6 gap-10">
			<div
				class="col-span-6 p-0 sm:col-span-3 md:col-span-3 lg:col-span-2"
				v-for="(card, index) in Footer.cards"
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

		<div class="mt-20 flex justify-between">
			<div class="flex gap-8">
				<div>
					<p class="mb-1 text-medium-dark">Version</p>
					<p class="font-semibold text-gray-600">©2024 Charm</p>
				</div>
				<div>
					<p class="mb-1 text-medium-dark">Local time</p>
					<p class="font-semibold text-gray-600">Bangkok 11:45 (GMT+7)</p>
				</div>
			</div>
			<div>
				<p class="text-medium-dark">Social</p>
				<div class="flex gap-8 font-semibold text-gray-600">
					<a href="#">LinkedIn</a>
					<a href="#">Facebook</a>
					<a href="#">Instagram</a>
				</div>
			</div>
		</div>
		<!-- <div class="bg-primary-500 h-[1px] w-full" />

		<div class="flex items-center justify-end gap-4 py-8">
			<a v-for="link in Footer.links" :key="link.label" :href="link.to">
				{{ link.label }}
			</a>
		</div>

		<div class="mt-10 flex flex-wrap items-end justify-between gap-4">
			<p class="flex flex-col gap-1">
				<span>{{ Footer.message[0] }}</span>
				<span class="text-header text-primary-500 leading-none">
					{{ Footer.message[1] }}
				</span>
			</p>

			<p class="flex flex-col gap-1">
				<span>{{ Footer.copyright[0] }}</span>
				<span>{{ Footer.copyright[1] }}</span>
			</p>
		</div> -->
	</footer>
</template>
