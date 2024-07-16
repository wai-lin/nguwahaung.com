<script setup lang="ts">
import { Header } from "~/data/Header";
console.log(Header);
</script>

<template>
	<header class="container absolute inset-x-0 top-0 z-50 flex h-20 w-full">
		<div class="flex items-center">
			<RouterLink :to="Header.brand.to">
				<Magnetic>
					<img :src="Header.brand.img" />
				</Magnetic>
			</RouterLink>
		</div>

		<div
			class="flex items-center justify-end gap-4 text-body font-medium text-dark lg:gap-10"
		>
			<RouterLink
				v-for="link in Header.links"
				:key="link.title"
				:to="link.to"
				class="hover:text-primary-500"
			>
				<Magnetic>{{ link.title }}</Magnetic>
			</RouterLink>
		</div>
	</header>
</template>
