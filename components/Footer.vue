<script setup lang="ts">
import { Footer } from "~/data/Footer";
</script>

<template>
	<footer class="container mx-auto mb-8 px-4 pt-20">
		<h1 class="text-gray-800 sm:text-title-xl my-6 text-header font-extrabold">
			LET'S CHAT
		</h1>

		<p class="text-gray-600 text-body tracking-normal md:text-title-md">
			I'm a product designer with a passion for innovative design. I build
			scalable websites focused on seamless development. My expertise in
			branding ensures cohesive and compelling brand identities.
		</p>

		<div class="my-28 grid grid-cols-6 gap-10">
			<div
				class="col-span-6 p-0 sm:col-span-3 md:col-span-3 lg:col-span-2"
				v-for="(card, index) in Footer.cards"
			>
				<div>
					<div class="flex justify-between">
						<h5
							class="text-lg font-semibold uppercase text-medium-dark md:text-title-md"
						>
							{{ card.title }}
						</h5>
						<span class="text-md text-light-dark">0{{ index + 1 }}</span>
					</div>
				</div>
				<hr class="border-gray-600 my-2 md:my-4" />
				<p class="text-medium-dark">{{ card.content }}</p>
			</div>
		</div>

		<Button type="primary">CONTACT ME VIA EMAIL</Button>

		<div class="mt-20 flex justify-between">
			<div class="flex gap-8">
				<div>
					<p class="text-gray-500 font-light">Version</p>
					<p class="text-gray-600 font-semibold">©2024 Charm</p>
				</div>
				<div>
					<p class="text-gray-500 font-light">Local time</p>
					<p class="text-gray-600 font-semibold">Bangkok 11:45 (GMT+7)</p>
				</div>
			</div>
			<div>
				<p class="text-gray-500 font-light">Social</p>
				<div class="text-gray-600 flex gap-8 font-semibold">
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
