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

	// grab state
	const state = Flip.getState(squares);

	// Make DOM or styling changes
	switchItUp();

	// Animate from the initial state to the end state
	Flip.from(state, { duration: 2, ease: "power1.inOut" });
});
</script>

<template>
	<Header class="text-white" />

	<section
		class="flex h-screen items-center bg-[url('https://as1.ftcdn.net/v2/jpg/08/56/66/74/1000_F_856667411_jq18GhDGglkYvmUZr6WoyNmjrVo9qJzS.jpg')] bg-cover text-white"
	>
		<div class="px-6 text-dark">
			<h1 ref="heroTitle" class="text-header font-extrabold"></h1>
			<p ref="heroSubtitle" class="text-semibold text-title-lg">
				Lorem ipsum, dolor sit amet consectetur <br />
				adipisicing elit. Quia magnam architecto eos.
			</p>

			<Button type="primary" class="mt-8 w-60 border-0">Learn more</Button>
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
					class="text-lg font-semibold uppercase text-medium-dark md:text-title-md"
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

	<Footer />
</template>
