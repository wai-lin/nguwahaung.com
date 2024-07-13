<script setup lang="ts">
import { Header } from "~/data/Header";
</script>

<template>
	<header
		class="absolute top-0 z-50 flex h-20 w-full items-center justify-between px-4 lg:px-10"
	>
		<div class="flex items-center">
			<RouterLink :to="Header.brand.to">
				<h3 class="text-title-md font-bold">{{ Header.brand.title }}</h3>
			</RouterLink>
		</div>

		<div class="flex items-center justify-end gap-4 lg:gap-10">
			<RouterLink v-for="link in Header.links" :key="link.title" :to="link.to">
				{{ link.title }}
			</RouterLink>
		</div>
	</header>
</template>
