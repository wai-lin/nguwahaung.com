<script setup lang="ts">
const BackdropImage =
	"https://s3-alpha-sig.figma.com/img/ecfa/d37d/1a5ec69aecd14263537862a0b22de93f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mN0QnWTCVHssGLxcAnyZ1gvqHgigM6hDg-HQNAj8N1tY4DOXUbesfWPLHAeApz-VIzqKdNh9puy93edJiLnD0~njBSnZQI1BTIdLhh-CVeUHc7okl1x0x1xZzIp8FyJd7mOuLW2vQ7kWLI5i5Ww-5bSX7-MPGDfrakicqGAN6IR5JpQJfzen-iqtgMZNbeIEXJd3e2mpz5JnQxHQ3C2w4iz--hsk6sARQaxC3-wqhGuKRAMvdZ40A6jDrX7Q-I-WrVIliSYw-s-G0EU55rvbK8a23-TIYdgZ~bJjH4ZhJfY0XGJZBqrE2Hzz~l8JUYxG2v3Wrx-zQpH~yue-WERBRw__";
</script>

<template>
	<header
		class="fixed top-0 z-50 flex h-20 w-full items-center justify-between px-4 text-white lg:px-10"
	>
		<div class="flex items-center">
			<RouterLink to="/wailin">
				<h3 class="text-4xl font-bold">Charm</h3>
			</RouterLink>
		</div>

		<div class="flex items-center justify-end gap-4 lg:gap-10">
			<RouterLink to="/wailin">About me</RouterLink>
			<RouterLink to="/wailin">Resume</RouterLink>
			<RouterLink to="/wailin">Contact</RouterLink>
		</div>
	</header>

	<section class="relative h-screen w-screen overflow-hidden">
		<img
			alt=""
			aria-hidden
			:src="BackdropImage"
			class="h-full w-full object-cover object-center"
		/>

		<div class="absolute inset-0 pt-40 lg:pt-40">
			<h6 class="container mx-auto mb-20 px-4 text-2xl lg:px-10">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
				voluptatibus ad quaerat cum omnis,
			</h6>

			<div gsap="reveal" class="absolute inset-0 bg-white">
				<h1>Borem ipsum dolor sit amet, conasdfrd.</h1>
				<p>
					Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos.
				</p>

				<div>
					<div>
						<p>Human Resource</p>
						<img
							src="https://s3-alpha-sig.figma.com/img/6829/de28/2e6b9807089df71cef22754bcea34ca3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4jsU2GGBjiH489cqBFeSu1ErinngyShDmV4FmZfWKcGAkPL9AQuCk11qdn9sKjSItp6Y33SXyeU5~j6M6VqMW2kdOCJxUNoMyuddaHhHdId7V-3WUsXbPYSAc92-eKf18zDgx0U34gEwMv7BWeaE2f48hXKmmJ192QWt3lzG-eMy35FPtC~9ph-LkjUaVq6aVSBp38ag0LAlTR0rD6SpTvycpYyX3Bp7DmTAgJXQP5SB4pGGCFGzgsb3FCJBcrGf-RNTvcQHrNQsorCOzXGLK34v9QUTpxdKSleqY1qkafxQZW9MnTZttbCvBdzuEYca4UxU1-7RSL298hq5R1rGQ__"
							alt=""
						/>
					</div>

					<div>
						<p>Fin Tech</p>
						<img
							src="https://s3-alpha-sig.figma.com/img/7aff/f010/867ba0a520174eee57e4230a98f4aaf1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OdIEqTyz2aHcCUwnorrL3fxf2WQD4Yhack4CNk~jf314-91X2KpsDH4QH4qwbhfKJQQ~zXt-d3pTbhYTSZEDGcgw4wkiPNmRrHNYgdy91ozk7mTKH6z~~nO3BDxWBdrmEuTTc9G7WfghmRt6GZJmxEfI3tZULNc2JCw8nomjTjLXqKo78PH2PLE2BmfRUg62U~1w8SwmwjSQjJiW58rNaGyA9oic9-szhSYwTaG3q3GBE2blw30Ui7LelxFosatsPxj6oxMGEfVR5pCQzfrV-jo7s-06czQxxSKBEhOc8sW3~gMsPMH~jGOsv~oagRacXvki9g94n~zmhcxf7Qq-HQ__"
							alt=""
						/>
					</div>

					<div>
						<p>Education</p>
						<img
							src="https://s3-alpha-sig.figma.com/img/b0b0/ad6a/689f7946b4bcc2bb47a6543ca5ce223e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFtoeJX7OHt0f--sOBgzeE8kVaAfyD4uhhFpXdXUwgelosctcInsC3kk6QU5sMrHAS9794dt9~1gJNMHatF3M11zIRJt~FqI3mvskY8fgD8ptQsiivMaJE8560K9Il-GqZ0u6lFAZ6KG3JXUIBOCkZKvn-T6R8kJlxYJTa~-LxwuKyVqzV1-f93XP2NsM1ENY6Qdr8yjbOR1m8p-7qWyKTIwmFthCdTfhH6gZbytYonc7Y821KgauiHh0kOrn14fA6oq6bENS20xXpoLxLPWq7aXQjrAop3DtFnvjlDrFJTLOI~Mxp5W8emOO5g3aNjIKzdFR6NDeeS686BqUi3B5g__"
							alt=""
						/>
					</div>
				</div>
			</div>

			<article
				v-show="false"
				gsap="gradient-card"
				class="gradient-border-mask mx-auto h-[fit-content] w-4/5 p-10 backdrop-blur-sm lg:w-3/4 lg:p-20"
			>
				<h1 class="text-4xl font-black md:text-5xl lg:text-6xl">
					Product Designer with strong project management, understand
					developement
				</h1>
			</article>
		</div>
	</section>

	<section class="h-screen w-screen bg-pink-200"></section>

	<footer class="container mx-auto py-20">
		<div class="h-[1px] w-full bg-pink-300" />
	</footer>
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
