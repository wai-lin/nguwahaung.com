<script setup lang="ts">
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Header } from "~/data/Header";

console.log(Header);

onMounted(() => {
	gsap.registerPlugin(ScrollToPlugin);
});

function scrollTo(to: string) {
	gsap.to(`[gsap="scroller"]`, {
		duration: 1,
		scrollTo: { y: to },
		ease: "power2",
	});
}
</script>

<template>
	<header class="container absolute inset-x-0 top-0 z-50 flex h-16 w-full">
		<div class="flex items-center">
			<Magnetic>
				<RouterLink to="/">
					<img :src="Header.brand.img" />
				</RouterLink>
			</Magnetic>
		</div>

		<div
			class="flex items-center justify-end gap-4 text-body font-medium text-dark lg:gap-10"
		>
			<template v-for="link in Header.links" :key="link.title">
				<RouterLink
					v-if="link?.to"
					:to="link.to"
					class="capitalize hover:text-primary-500"
				>
					<Magnetic>{{ link.title }}</Magnetic>
				</RouterLink>

				<a
					v-if="link?.scrollTo"
					:href="link.scrollTo"
					class="capitalize hover:text-primary-500"
					@click.prevent="scrollTo(link.scrollTo)"
				>
					<Magnetic>{{ link.title }}</Magnetic>
				</a>
			</template>
		</div>
	</header>
</template>
