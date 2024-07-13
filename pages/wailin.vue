<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackdropImage } from "~/data/HeroSection";

console.log(BackdropImage);

const prefersReducedMotion = ref(false);

onMounted(() => {
	// Register plugins first
	gsap.registerPlugin(ScrollTrigger);

	// Trigger animations based on Media Query
	type MediaConditions = {
		isSmallScreen: boolean;
		isLargeScreen: boolean;
		reducedAnimation: boolean;
	};
	const media = gsap.matchMedia();
	media.add(
		{
			isSmallScreen: "(max-width: 1023px)",
			isLargeScreen: "(min-width: 1024px)",
			reducedAnimation: "(prefers-reduced-motion: no-preference)",
		},
		(ctx) => {
			const { isSmallScreen, isLargeScreen, reducedAnimation } =
				ctx.conditions as MediaConditions;

			// const noAnimation = reducedAnimation || prefersReducedMotion.value;
			// if (noAnimation) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: `[gsap="scroll-trigger"]`,
					pin: true,
					scrub: true,
					start: "top top",
					end: isSmallScreen ? "end end" : "+=120%",
				},
			});

			tl.to(`[gsap="reveal"]`, {
				transformOrigin: "center",
				scale: isLargeScreen ? 1 : "",
				height: isLargeScreen ? "100%" : "",
				ease: "sine.in",
			})
				.to(`[gsap="gradient-card"]`, {
					translateY: isLargeScreen ? 20 : "",
					opacity: isLargeScreen ? 0 : "",
					scale: isLargeScreen ? 0.5 : 1,
					zIndex: 0,
					ease: "sine.in",
				})
				.from(`[gsap="profession-card"]`, {
					scale: 0,
					ease: "sine.out",
				})
				.to(`[gsap="reveal-2"]`, {
					opacity: isLargeScreen ? 1 : "",
					ease: "sine.in",
				});
		},
	);
});
</script>

<template>
	<Header class="text-white" />

	<section
		gsap="scroll-trigger"
		class="sticky top-0 h-screen w-screen overflow-hidden lg:relative"
	>
		<img
			alt=""
			aria-hidden
			:src="BackdropImage"
			class="h-full w-full object-cover object-[80%_50%] lg:object-center"
		/>

		<div class="lg:pt-30 absolute inset-0 pt-20">
			<h6
				class="text-title-lg container mx-auto mb-8 px-4 font-bold lg:mb-10 lg:px-10"
			>
				Lorem ipsum dolor, sit amet consectetur
			</h6>

			<div gsap="reveal" class="bg-light absolute inset-0 scale-0">
				<div class="container mx-auto py-20">
					<h1
						gsap="reveal-2"
						class="text-header mb-4 text-center font-bold leading-tight opacity-0"
					>
						Borem ipsum dolor sit amet, conasdfrd.
					</h1>
					<p
						gsap="reveal-2"
						class="mx-auto max-w-[800px] text-center opacity-0"
					>
						Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						vulputate libero et velit interdum, ac aliquet odio mattis. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos.
					</p>

					<div class="relative flex items-center justify-center">
						<ProfessionCard
							gsap="profession-card"
							title="Human Resource"
							img-url="https://s3-alpha-sig.figma.com/img/6829/de28/2e6b9807089df71cef22754bcea34ca3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4jsU2GGBjiH489cqBFeSu1ErinngyShDmV4FmZfWKcGAkPL9AQuCk11qdn9sKjSItp6Y33SXyeU5~j6M6VqMW2kdOCJxUNoMyuddaHhHdId7V-3WUsXbPYSAc92-eKf18zDgx0U34gEwMv7BWeaE2f48hXKmmJ192QWt3lzG-eMy35FPtC~9ph-LkjUaVq6aVSBp38ag0LAlTR0rD6SpTvycpYyX3Bp7DmTAgJXQP5SB4pGGCFGzgsb3FCJBcrGf-RNTvcQHrNQsorCOzXGLK34v9QUTpxdKSleqY1qkafxQZW9MnTZttbCvBdzuEYca4UxU1-7RSL298hq5R1rGQ__"
							class="absolute left-20 top-20 z-0 blur-[1px]"
						/>
						<ProfessionCard
							gsap="profession-card"
							title="Fin Tech"
							img-url="https://s3-alpha-sig.figma.com/img/7aff/f010/867ba0a520174eee57e4230a98f4aaf1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OdIEqTyz2aHcCUwnorrL3fxf2WQD4Yhack4CNk~jf314-91X2KpsDH4QH4qwbhfKJQQ~zXt-d3pTbhYTSZEDGcgw4wkiPNmRrHNYgdy91ozk7mTKH6z~~nO3BDxWBdrmEuTTc9G7WfghmRt6GZJmxEfI3tZULNc2JCw8nomjTjLXqKo78PH2PLE2BmfRUg62U~1w8SwmwjSQjJiW58rNaGyA9oic9-szhSYwTaG3q3GBE2blw30Ui7LelxFosatsPxj6oxMGEfVR5pCQzfrV-jo7s-06czQxxSKBEhOc8sW3~gMsPMH~jGOsv~oagRacXvki9g94n~zmhcxf7Qq-HQ__"
							class="absolute top-20 z-10 scale-125"
						/>
						<ProfessionCard
							gsap="profession-card"
							title="Education"
							img-url="https://s3-alpha-sig.figma.com/img/b0b0/ad6a/689f7946b4bcc2bb47a6543ca5ce223e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFtoeJX7OHt0f--sOBgzeE8kVaAfyD4uhhFpXdXUwgelosctcInsC3kk6QU5sMrHAS9794dt9~1gJNMHatF3M11zIRJt~FqI3mvskY8fgD8ptQsiivMaJE8560K9Il-GqZ0u6lFAZ6KG3JXUIBOCkZKvn-T6R8kJlxYJTa~-LxwuKyVqzV1-f93XP2NsM1ENY6Qdr8yjbOR1m8p-7qWyKTIwmFthCdTfhH6gZbytYonc7Y821KgauiHh0kOrn14fA6oq6bENS20xXpoLxLPWq7aXQjrAop3DtFnvjlDrFJTLOI~Mxp5W8emOO5g3aNjIKzdFR6NDeeS686BqUi3B5g__"
							class="absolute right-20 top-20 z-0 blur-[1px]"
						/>
					</div>
				</div>
			</div>

			<article
				gsap="gradient-card"
				class="gradient-border-mask mx-auto h-[fit-content] w-4/5 p-10 backdrop-blur-sm lg:w-3/4 lg:p-20"
			>
				<h1
					class="text-title-lg text-light lg:text-header lg:text-dark font-bold lg:leading-none"
				>
					Product Designer with strong project management, understand
					developement
				</h1>
			</article>
		</div>
	</section>

	<section class="bg-light sticky px-4 py-10 lg:hidden">
		<h1 class="text-title-lg pb-4 font-bold leading-none">
			Borem ipsum dolor sit amet, conasdfrd.
		</h1>
		<p class="mb-4">
			Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
			libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
			sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
		</p>

		<div class="flex flex-col items-center justify-center gap-4">
			<ProfessionCard
				title="Fin Tech"
				img-url="https://s3-alpha-sig.figma.com/img/7aff/f010/867ba0a520174eee57e4230a98f4aaf1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OdIEqTyz2aHcCUwnorrL3fxf2WQD4Yhack4CNk~jf314-91X2KpsDH4QH4qwbhfKJQQ~zXt-d3pTbhYTSZEDGcgw4wkiPNmRrHNYgdy91ozk7mTKH6z~~nO3BDxWBdrmEuTTc9G7WfghmRt6GZJmxEfI3tZULNc2JCw8nomjTjLXqKo78PH2PLE2BmfRUg62U~1w8SwmwjSQjJiW58rNaGyA9oic9-szhSYwTaG3q3GBE2blw30Ui7LelxFosatsPxj6oxMGEfVR5pCQzfrV-jo7s-06czQxxSKBEhOc8sW3~gMsPMH~jGOsv~oagRacXvki9g94n~zmhcxf7Qq-HQ__"
			/>
			<ProfessionCard
				title="Human Resource"
				img-url="https://s3-alpha-sig.figma.com/img/6829/de28/2e6b9807089df71cef22754bcea34ca3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4jsU2GGBjiH489cqBFeSu1ErinngyShDmV4FmZfWKcGAkPL9AQuCk11qdn9sKjSItp6Y33SXyeU5~j6M6VqMW2kdOCJxUNoMyuddaHhHdId7V-3WUsXbPYSAc92-eKf18zDgx0U34gEwMv7BWeaE2f48hXKmmJ192QWt3lzG-eMy35FPtC~9ph-LkjUaVq6aVSBp38ag0LAlTR0rD6SpTvycpYyX3Bp7DmTAgJXQP5SB4pGGCFGzgsb3FCJBcrGf-RNTvcQHrNQsorCOzXGLK34v9QUTpxdKSleqY1qkafxQZW9MnTZttbCvBdzuEYca4UxU1-7RSL298hq5R1rGQ__"
			/>
			<ProfessionCard
				title="Education"
				img-url="https://s3-alpha-sig.figma.com/img/b0b0/ad6a/689f7946b4bcc2bb47a6543ca5ce223e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFtoeJX7OHt0f--sOBgzeE8kVaAfyD4uhhFpXdXUwgelosctcInsC3kk6QU5sMrHAS9794dt9~1gJNMHatF3M11zIRJt~FqI3mvskY8fgD8ptQsiivMaJE8560K9Il-GqZ0u6lFAZ6KG3JXUIBOCkZKvn-T6R8kJlxYJTa~-LxwuKyVqzV1-f93XP2NsM1ENY6Qdr8yjbOR1m8p-7qWyKTIwmFthCdTfhH6gZbytYonc7Y821KgauiHh0kOrn14fA6oq6bENS20xXpoLxLPWq7aXQjrAop3DtFnvjlDrFJTLOI~Mxp5W8emOO5g3aNjIKzdFR6NDeeS686BqUi3B5g__"
			/>
		</div>
	</section>

	<section class="bg-primary-400 h-screen w-screen"></section>

	<Footer />
</template>

<style>
.gradient-border-mask::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 35px;
	border: 5px solid transparent;
	background: linear-gradient(90deg, #f5029494, white) border-box;
	mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	-webkit-mask:
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: destination-out;
	mask-composite: exclude;
}
</style>
