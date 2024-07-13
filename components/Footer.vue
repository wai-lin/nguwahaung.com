<script setup lang="ts">
import { Footer } from "~/data/Footer";
</script>

<template>
	<footer class="container mx-auto px-4 pb-24 pt-20">
		<div class="bg-primary-500 h-[1px] w-full" />

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
		</div>
	</footer>
</template>
