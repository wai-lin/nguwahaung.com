<script setup lang="ts">
import { Footer } from "~/data/Footer";
</script>

<template>
	<footer id="footer-section" class="container my-8">
		<div class="mt-20 grid grid-cols-4 gap-8">
			<div class="col-span-4 flex gap-8 md:col-span-2">
				<article>
					<p class="mb-1 text-medium-dark">{{ Footer.version.label }}</p>
					<p class="font-semibold text-gray-600">{{ Footer.version.value }}</p>
				</article>
				<article>
					<p class="mb-1 text-medium-dark">{{ Footer.localTime }}</p>
					<p class="font-semibold text-gray-600">Bangkok 11:45 (GMT+7)</p>
				</article>
			</div>

			<div class="col-span-4 md:col-span-2">
				<article class="md:float-right">
					<p class="mb-1 text-medium-dark">{{ Footer.socials.label }}</p>
					<div class="flex gap-8 font-semibold text-gray-600">
						<Magnetic v-for="link in Footer.socials.value" class="hover:text-primary-500">
							<a :href="link.to" target="_blank">{{ link.label }}</a>
						</Magnetic>
					</div>
				</article>
			</div>
		</div>
	</footer>
</template>
