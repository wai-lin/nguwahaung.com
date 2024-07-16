<script setup lang="ts">
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref } from "vue";
import { ProjectInfo } from "~/data/CaseStudy";

const heroTitle = ref(null);
const heroSubtitle = ref(null);

onMounted(() => {
	gsap.registerPlugin(TextPlugin);
	gsap.registerPlugin(Flip);

	gsap.to(heroTitle.value, { duration: 2, text: "Case Study Title" });
	gsap.from(heroSubtitle.value, {
		duration: 2,
		text: "",
		ease: "circ.in",
	});
});
</script>

<template>
	<Header class="text-white" />

	<section
		class="flex h-screen items-center bg-[url('./images/cover.jpg')] bg-cover bg-bottom text-white"
	>
		<div class="px-16 text-dark">
			<h1 ref="heroTitle" class="text-header font-extrabold"></h1>
			<p ref="heroSubtitle" class="text-semibold text-title-lg">
				Lorem ipsum, dolor sit amet consectetur <br />
				adipisicing elit. Quia magnam architecto eos.
			</p>

			<Button class="mt-8">Learn more</Button>
		</div>
	</section>

	<div class="container mx-auto p-4">
		<h1 class="py-8 text-3xl font-extrabold text-gray-800 md:text-header">
			{{ ProjectInfo.title }}
		</h1>

		<div class="my-10 grid grid-cols-6 gap-10">
			<div
				class="col-span-6 p-0 sm:col-span-3 md:col-span-3 lg:col-span-2"
				v-for="(card, index) in ProjectInfo.cards"
			>
				<h5
					class="text-lg font-semibold uppercase text-primary-500 md:text-title-md"
				>
					{{ card.title }}
				</h5>
				<hr class="my-2 border-gray-600 md:my-4" />
				<p class="text-medium-dark">{{ card.content }}</p>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4 md:px-16">
		<div class="space-y-4">
			<h3 class="text-title-lg">Introduction</h3>

			<p>
				In this case study, we explore the redesign of a mobile banking app
				aimed at enhancing user experience and accessibility. The goal was to
				create a seamless, intuitive, and user-friendly interface that meets the
				needs of diverse users.
			</p>

			<div>
				<p>Project Overview</p>
				<ul class="ml-8 list-disc">
					<li>Client: XYZ Bank</li>
					<li>Duration: 6 months</li>
					<li>
						Team: UX/UI Designers, Product Managers, Developers, QA Testers
					</li>
				</ul>
			</div>

			<h4 class="pt-10 text-title-md">Problem Statement</h4>

			<p>
				The existing mobile banking app was outdated, with a complex interface
				and limited functionality, leading to a poor user experience and low
				customer satisfaction.
			</p>

			<img
				src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt="stock"
				class="h-[400px] w-full object-cover pt-10"
			/>

			<h3 class="text-title-lg">Research</h3>
			<h4 class="pt-10 text-title-md">User Research</h4>
			<div>
				<p>Surveys and Interviews:</p>
				<ul class="ml-8 list-disc">
					<li>
						Conducted surveys and interviews with 200+ users to understand their
						needs and pain points.
					</li>
					<li>
						Key findings: Users found the app cluttered, difficult to navigate,
						and lacking essential features.
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="container mx-auto my-10 px-6">
		<Magnetic>
			<svg
				id="Layer_2"
				data-name="Layer 2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 31.5 58"
				class="size-10"
			>
				<path
					d="m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z"
				/>
			</svg>
		</Magnetic>
	</div>

	<Footer class="container" />
</template>

<style>
svg {
	fill: #d3a369;
	transition: fill 0.2s;
	cursor: pointer;
	&:hover {
		fill: #ec4e39;
	}
}
</style>
