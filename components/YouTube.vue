<script setup lang="ts">
interface Props {
	url: string;
	controls?: boolean;
	autoplay?: boolean;
	loop?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	controls: true,
	autoplay: false,
	loop: false,
});
const src = computed(() => {
	const url = new URL(props.url);
	const videoId = url.pathname.split("/")[2] || "";

	if (props.controls) url.searchParams.set("controls", "1");
	else url.searchParams.set("controls", "0");

	if (props.autoplay) {
		url.searchParams.set("autoplay", "1");
		url.searchParams.set("mute", "1");
	} else url.searchParams.delete("autoplay");

	if (props.loop) {
		url.searchParams.set("loop", "1");
		url.searchParams.set("playlist", videoId);
	} else {
		url.searchParams.delete("loop");
		url.searchParams.delete("playlist");
	}

	return url.toString();
});
// https://www.youtube.com/embed/y948Nx9FCcU?si=p6IWr5LOnl3LQOyc&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=y948Nx9FCcU
</script>

<template>
	<article>
		<iframe
			class="aspect-video w-full"
			width="640"
			height="360"
			:src="src"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</article>
</template>
