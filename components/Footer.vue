<script setup lang="ts">
import { Footer } from "~/data/Footer";

const dateTime = ref(new Date());
let intervalId: number;

const formattedDateTime = computed(() => {
	const options: Intl.DateTimeFormatOptions = {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "Asia/Bangkok",
	};
	const timeString = new Intl.DateTimeFormat("en-US", options).format(
		dateTime.value,
	);
	return `Bangkok ${timeString} (GMT+7)`;
});

const updateDateTime = () => {
	dateTime.value = new Date();
};

onMounted(() => {
	intervalId = window.setInterval(updateDateTime, 1000);
});

onUnmounted(() => {
	clearInterval(intervalId);
});
</script>

<template>
	<footer id="footer-section">
		<div class="grid grid-cols-4 gap-8">
			<div class="col-span-4 flex gap-8 md:col-span-2">
				<article>
					<p class="mb-1 text-medium-dark">{{ Footer.version.label }}</p>
					<p class="font-semibold text-gray-600">{{ Footer.version.value }}</p>
				</article>
				<article>
					<p class="mb-1 text-medium-dark">{{ Footer.localTime }}</p>
					<p class="font-semibold text-gray-600">{{ formattedDateTime }}</p>
				</article>
			</div>

			<div class="col-span-4 md:col-span-2">
				<article class="md:float-right">
					<p class="mb-1 text-medium-dark">{{ Footer.socials.label }}</p>
					<div class="flex gap-8 font-semibold text-gray-600">
						<Magnetic
							v-for="link in Footer.socials.value"
							class="hover:text-primary-500"
						>
							<a :href="link.to" target="_blank">{{ link.label }}</a>
						</Magnetic>
					</div>
				</article>
			</div>
		</div>
	</footer>
</template>
