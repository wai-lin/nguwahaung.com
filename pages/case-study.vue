<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	concepts,
	finalKeyTakeaways,
	infos,
	keyTakeaways,
	learns,
	subTesting,
	usabilityResults,
} from "~/data/CaseStudy";
console.log(
	infos,
	concepts,
	learns,
	keyTakeaways,
	usabilityResults,
	subTesting,
	finalKeyTakeaways,
);

gsap.registerPlugin(ScrollTrigger);

const sectionRefs = ref([]);
const imageRefs = ref<HTMLImageElement[] | null>(null);
const briefRef = ref(null);
const ecosystemRef = ref(null);
const opportunitiesRef = ref(null);
const competitiveRef = ref(null);

onMounted(() => {
	type MediaConditions = {
		isSmallScreen: boolean;
		isLargeScreen: boolean;
		reducedAnimation: boolean;
	};
	gsap.matchMedia().add(
		{
			isSmallScreen: "(max-width: 1023px)",
			isLargeScreen: "(min-width: 1024px)",
			reducedAnimation: "(prefers-reduced-motion: no-preference)",
		},
		(ctx) => {
			const { isSmallScreen, isLargeScreen, reducedAnimation } =
				ctx.conditions as MediaConditions;

			// Animate the infos section
			const lists = document.querySelectorAll("#lists-animate");
			lists.forEach((list) => {
				gsap.fromTo(
					list,
					{ autoAlpha: 0, y: 50 },
					{
						scrollTrigger: {
							trigger: list,
							start: isLargeScreen ? "top 80%" : "top 100%",
							end: "bottom 20%",
							toggleActions: "play none none reverse",
						},
						autoAlpha: 1,
						y: 0,
						duration: 1,
						stagger: 0.3,
					},
				);
			});

			const endLists = document.querySelectorAll("#lists-animate-end");
			endLists.forEach((list) => {
				gsap.fromTo(
					list,
					{ autoAlpha: 0, y: 50 },
					{
						scrollTrigger: {
							trigger: list,
							start: "top 100%",
							end: "bottom 20%",
							toggleActions: "play none none reverse",
						},
						autoAlpha: 1,
						y: 0,
						duration: 1,
						stagger: 0.3,
					},
				);
			});
			// Animate each image
			const images = document.querySelectorAll("img");
			images?.forEach((image) => {
				gsap.fromTo(
					image,
					{ autoAlpha: 0, x: 100 },
					{
						scrollTrigger: {
							trigger: image,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
						autoAlpha: 1,
						x: 0,
						duration: 1,
					},
				);
			});

			const cards = document.querySelectorAll(".card");
			cards?.forEach((card) => {
				gsap.fromTo(
					card,
					{ autoAlpha: 0, y: 50 },
					{
						scrollTrigger: {
							trigger: card,
							start: isLargeScreen ? "top 70%" : "top 100%",
							toggleActions: "play none none reverse",
						},
						autoAlpha: 1,
						y: 0,
						duration: 1,
					},
				);
			});

			const sectionHeaders = document.querySelectorAll("#section-header");
			sectionHeaders?.forEach((sectionHeader) => {
				gsap.fromTo(
					sectionHeader,
					{ autoAlpha: 0, y: 50 },
					{
						scrollTrigger: {
							trigger: sectionHeader,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
						autoAlpha: 1,
						y: 0,
						duration: 1,
					},
				);
			});
		},
	);
});
</script>

<template>
	<Header class="sticky bg-light text-white shadow-sm" />

	<section class="bg-light">
		<div class="container py-12">
			<div class="grid grid-cols-6 gap-0 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<div>
						<div id="section-header">
							<h1 class="hero-title mt-3 uppercase">UniLinks</h1>
							<p class="text-content mt-8">Case Study —</p>
							<p class="text-content mt-4">
								Personalized platform for international students, streamlining
								the application process.
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-6 mt-10 overflow-hidden px-0 md:col-span-4 md:mt-0 md:px-8"
				>
					<img
						ref="imageRefs"
						src="/public/images/case-study-thumbnail.svg"
						class="h-auto w-full object-cover object-left"
					/>
				</div>
			</div>
		</div>

		<div class="container bg-primary-600 px-16 py-12 text-light">
			<div class="relative grid grid-cols-6 gap-0 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<h5 class="text-lg font-semibold uppercase md:text-title-md">
						ROLE AND RESPONSIBILITY
					</h5>
					<p class="mt-4">
						As a Product Designer, I create designs, collaborate with teams,
						conduct user research, and develop prototypes
					</p>
				</div>
				<div class="col-span-6 md:col-span-4">
					<div class="flex justify-between gap-4">
						<div class="px-0 md:px-8">
							<h5 class="text-lg font-semibold uppercase md:text-title-md">
								Team MEMBERS
							</h5>
							<p class="mt-4">Charm, Yan Naing, Wai Lin, Ye Yint</p>
						</div>
						<div>
							<h5 class="text-lg font-semibold uppercase md:text-title-md">
								TOOLS
							</h5>
							<p class="mt-4">
								Figma, FigJam, Miro, Sketch, Adobe Creative Suite
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- The Brief -->
		<div class="container my-20" ref="briefRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle mini-title="Introduction" title="The Brief" />
				</div>
				<div class="col-span-6 space-y-8 md:col-span-4">
					<div class="card">
						<h2 class="card-title">The ASK</h2>
						<p class="card-content">
							To create a comprehensive, user-friendly platform that streamlines
							the study abroad process for international students, making it
							easier for students to find, apply, and get accepted into suitable
							programs in Thailand.
						</p>
					</div>

					<div class="card">
						<h2 class="card-title">Problem Statement</h2>
						<div class="space-y-4">
							<p class="card-content">
								Finding accurate information about programs, understanding
								diverse requirements, and preparing strong applications is
								difficult due to scattered and inconsistent information.
							</p>

							<p class="card-content">
								Keeping track of multiple institutions' application statuses,
								deadlines, and requirements can be overwhelming without
								real-time updates and centralized management.
							</p>

							<p class="card-content">
								Students need transparent information about tuition fees,
								scholarships, and other costs, as well as assistance in finding
								and applying for financial aid.
							</p>
						</div>
					</div>

					<div class="card">
						<h2 class="card-title">Solution</h2>
						<p class="card-content">
							UniLinks is an innovative platform offering students a streamlined
							process for searching, applying, and gaining acceptance into
							academic programs. UniLinks provides continuous expert support
							throughout the application process, ensuring document submission,
							and facilitating communication with institutions.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="my-10 overflow-hidden">
			<img
				ref="imageRefs"
				src="public/images/brief-dummy.svg"
				alt="people-group"
				class="h-auto max-h-[500px] w-full object-cover"
			/>
		</div>

		<!-- Ecosystem Analysis -->
		<div class="container my-20" ref="ecosystemRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle
						mini-title="Ecosystem Opportunities"
						title="Understanding the application process"
					/>
				</div>
				<div class="col-span-6 space-y-10 overflow-hidden md:col-span-4">
					<div class="card">
						<h2 class="card-title">Comprehensive UX Analysis</h2>
						<p class="card-content">
							At UniLinks, we conducts a comprehensive ecosystem analysis to
							understand the educational landscape, identify key stakeholders,
							and assess market opportunities. This analysis helps us tailor our
							consultancy services to effectively link students with top
							universities, ensuring a strategic fit and optimal outcomes for
							both students and educational institutions.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Pre-Application Phase -->
		<div class="container bg-primary-50 py-20">
			<div class="pb-10 md:top-10" id="section-header">
				<h1 class="section-title md:leading-[44px]">
					Pre-Application <br />
					Phase
				</h1>
			</div>
			<div class="sm:mt-10 md:mt-0">
				<img
					ref="imageRefs"
					src="public/images/pre-application-phase.svg"
					alt="people-group"
					class="mx-auto h-4/5 w-full object-cover"
				/>
			</div>
		</div>

		<!-- Business Opportunities -->
		<div class="container my-20" ref="opportunitiesRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle
						mini-title="Business Opportunities"
						title="Make a complicated process simple"
					/>
				</div>
				<div class="col-span-6 space-y-8 md:col-span-4">
					<div class="card">
						<h2 class="card-subtitle">Researching Phase</h2>
						<p class="card-content">
							Opportunity 1: Comprehensive Information Hub with Personalized
							Program Recommendations and Interactive Tools.
						</p>
					</div>

					<div class="card">
						<h2 class="card-subtitle">Planning Phase</h2>
						<p class="card-content">
							Opportunity 2: Integrated Application Checklist and Real-Time
							Tracking System.
						</p>
					</div>

					<div class="card">
						<h2 class="card-subtitle">Applying Phase</h2>
						<p class="card-content">
							Opportunity 3: Comprehensive Application Assistance and Document
							Management Services.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Competitive analysis -->
		<div class="container my-20" ref="competitiveRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle
						mini-title="Competitive analysis"
						title="Learning from others within our space"
					/>
				</div>
				<div class="col-span-6 space-y-8 md:col-span-4">
					<div class="card">
						<h2 class="card-title">Competitor Landscape</h2>
						<p class="card-subtitle pt-8">Facebook and Instagram Pages</p>
						<div class="space-y-4">
							<p class="card-content">
								Strengths: Share scholarship and university information online
								for free, providing updates and useful tips for students.
							</p>
							<p class="card-content">
								Limitations: Only share information without offering any
								application support or personalized guidance.
							</p>
						</div>
					</div>

					<div class="card">
						<h2 class="card-subtitle">University Admission Agencies</h2>
						<div class="space-y-4">
							<p class="card-content">
								Strengths: Assist students with the admission process, including
								consultation, document checking, and university payment
								handling.
							</p>
							<p class="card-content">
								Limitations: The range of program choices is very limited as
								students can only apply to universities that have partnerships
								with the agencies.
							</p>
						</div>
					</div>

					<div class="card">
						<h2 class="card-subtitle">Scholarship Information Portals</h2>
						<div class="space-y-4">
							<p class="card-content">
								Strengths: Provide platforms where students can find various
								scholarship opportunities, allowing them to search and gather
								information about available scholarships.
							</p>
							<p class="card-content">
								Limitations: Students must handle the entire application process
								by themselves, as these portals do not provide application
								assistance or support.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="my-10">
				<img
					ref="imageRefs"
					src="public/images/competitive-analytics.png"
					alt="people-group"
					class="mx-auto h-auto w-full object-cover"
				/>
			</div>
		</div>

		<!-- Study Abroad -->
		<div class="container bg-primary-500 py-20">
			<div>
				<p class="mb-2 text-light">CONCEPT</p>
				<h1
					class="hero-title space-y-1 uppercase text-light md:-space-y-1 lg:-space-y-5"
				>
					<p>Study Abroad with</p>
					<p>Simplicity and Assurance</p>
				</h1>
			</div>

			<ul class="mt-14 space-y-2 md:space-y-6">
				<li
					id="lists-animate"
					ref="sectionRefs"
					v-for="concept in concepts"
					:key="concept"
					class="flex gap-4 text-xl text-light md:text-2xl"
				>
					<span>-></span> <span>{{ concept }}</span>
				</li>
			</ul>
		</div>

		<!-- User Research -->
		<div class="container my-20" ref="competitiveRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle mini-title="Interviews" title="User Research" />
				</div>
				<div class="col-span-6 space-y-8 md:col-span-4">
					<div class="card">
						<h2 class="card-subtitle">Interviews Conducted</h2>
						<p class="card-content">
							20 in-depth interviews with international students who are
							planning to study in Thailand or have recently completed their
							application process so that they would be able to share their
							experience along the application journey.
						</p>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="public/images/interview.svg"
								class="w-full rounded-2xl"
							/>
						</div>
					</div>

					<div class="card">
						<h2 class="card-subtitle">What we learned</h2>
						<p class="card-content">
							Students struggled with information overload. Personalized
							guidance and real-time updates were essential. Tools like
							comparison charts and virtual tours helped with decisions.
							Managing documents was complex, highlighting the need for a
							streamlined solution. These insights refined UniLinks to better
							support students.
						</p>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="public/images/what-we-learned.svg"
								class="w-full"
							/>
						</div>
					</div>

					<div class="card">
						<h2 class="card-subtitle">KEY TAKEAWAYS</h2>
						<ul class="ml-4 list-disc space-y-8">
							<li
								class="card-content flex items-center gap-4"
								v-for="keyTakeaway in keyTakeaways"
							>
								<img
									src="public/images/check-icon.svg"
									class="size-8 md:size-10"
									ref="checkIcon"
								/>
								<span>{{ keyTakeaway.title }}</span>
							</li>
						</ul>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="public/images/what-we-learned-2.svg"
								class="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="my-10">
			<img
				ref="imageRefs"
				src="public/images/user-research.png"
				alt="people-group"
				class="mx-auto h-auto w-full object-cover"
			/>
		</div>

		<div class="container py-20">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle
						mini-title="Analyzing research"
						title="Distilling the research into personas"
					/>
				</div>
				<div class="col-span-6 space-y-8 md:col-span-4">
					<div class="">
						<img
							ref="imageRefs"
							src="public/images/persona-1.svg"
							class="w-full"
						/>
					</div>
					<div class="">
						<img
							ref="imageRefs"
							src="public/images/persona-2.svg"
							class="w-full"
						/>
					</div>
					<div class="">
						<img
							ref="imageRefs"
							src="public/images/persona-3.svg"
							class="w-full"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- User Flow -->
		<div class="container bg-gray-50 py-20">
			<div id="section-header">
				<p class="text-medium-dark">User Flow</p>
				<h1 class="section-title">
					How might Maria find the right study <br />
					abroad program for her?
				</h1>
				<h2 class="section-subtitle md:mt-10 lg:mt-20">Wireframe</h2>
			</div>
			<div class="mt-10">
				<img
					ref="imageRefs"
					src="public/images/wireframe.svg"
					alt="wireframe"
					class="mx-auto h-screen w-full object-cover"
				/>
			</div>

			<!-- Hi-Fi Design -->
			<div class="space-y-32">
				<div id="section-header" class="md:my-10 lg:my-20">
					<h2 class="section-subtitle">HI-FI Design</h2>
				</div>
				<div
					id="section-header"
					class="relative grid grid-cols-6 gap-10 md:gap-20"
				>
					<div class="col-span-6 md:col-span-2">
						<p class="text-content">
							Monica logs into UniLinks and accesses the personalized program
							recommendation feature.
						</p>
					</div>
					<div
						class="col-span-6 mt-10 overflow-hidden px-0 md:col-span-4 md:mt-0 md:px-8"
					>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="/public/images/sign-up.png"
								class="h-auto w-full object-cover md:h-auto"
							/>
						</div>
					</div>
				</div>

				<div
					id="section-header"
					class="relative grid grid-cols-6 gap-10 md:gap-20"
				>
					<div class="col-span-6 md:col-span-2">
						<p class="text-content">
							She fills out her academic background, interests, and career
							goals. The system-driven recommendation engine generates a list of
							suitable programs.
						</p>
					</div>
					<div
						class="col-span-6 mt-10 overflow-hidden px-0 md:col-span-4 md:mt-0 md:px-8"
					>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="/public/images/unilink-1.png"
								class="h-auto w-full object-cover object-left"
							/>
						</div>
					</div>
				</div>

				<div
					id="section-header"
					class="relative grid grid-cols-6 gap-10 md:gap-20"
				>
					<div class="col-span-6 md:col-span-2">
						<p class="text-content">
							She can easily compare courses between different universities.
						</p>
					</div>
					<div
						class="col-span-6 mt-10 overflow-hidden px-0 md:col-span-4 md:mt-0 md:px-8"
					>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="/public/images/unilink-2.png"
								class="h-auto w-full object-cover object-left"
							/>
						</div>
					</div>
				</div>

				<div
					id="section-header"
					class="relative grid grid-cols-6 gap-10 md:gap-20"
				>
					<div class="col-span-6 md:col-span-2">
						<p class="text-content">
							She decides to book a consultation session with UniLinks and fills
							out the consultation form.
						</p>
					</div>
					<div
						class="col-span-6 mt-10 overflow-hidden px-0 md:col-span-4 md:mt-0 md:px-8"
					>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="/public/images/unilink-3.png"
								class="h-auto w-full object-cover object-left"
							/>
						</div>
					</div>
				</div>

				<div
					id="section-header"
					class="relative grid grid-cols-6 gap-10 md:gap-20"
				>
					<div class="col-span-6 md:col-span-2">
						<p class="text-content">
							Finally, Monica discovers programs that match her interests,
							explores detailed descriptions, takes virtual tours, and adds her
							favorites to a shortlist.
						</p>
					</div>
					<div
						class="col-span-6 mt-10 overflow-hidden px-0 md:col-span-4 md:mt-0 md:px-8"
					>
						<div class="card-image">
							<img
								ref="imageRefs"
								src="/public/images/unilink-4.png"
								class="h-auto w-full object-cover object-left"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container py-20">
			<div class="pb-20 md:top-10" id="section-header">
				<p class="text-medium-dark">User-flow Diagram</p>
				<h1 class="section-title">
					From concept to reality: Beginning with user flows.
				</h1>
			</div>
			<div class="sm:mt-10 md:mt-0">
				<img
					ref="imageRefs"
					src="public/images/userflow.jpg"
					alt="people-group"
					class="mx-auto h-auto w-full object-cover"
				/>
			</div>
		</div>

		<div class="container py-20">
			<div class="md:top-10" id="section-header">
				<p class="text-medium-dark">Sitemap</p>
				<h1 class="section-title">Developing the app structures</h1>
			</div>
			<div class="mt-20">
				<img
					ref="imageRefs"
					src="public/images/sitemap.jpg"
					alt="people-group"
					class="mx-auto h-auto w-full object-cover"
				/>
			</div>
		</div>

		<div class="container py-20">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle mini-title="Feedback" title="Usability Test Results" />
				</div>
				<div class="col-span-6 space-y-6 overflow-hidden md:col-span-4">
					<div class="card">
						<h2 class="card-title mb-14">Key Takeaways</h2>
						<p class="card-subtitle">Learnability</p>
						<p class="card-content">
							The system is easy to learn, but an initial tutorial could help
							some users.
						</p>
					</div>

					<div class="card">
						<p class="card-subtitle">Findability</p>
						<p class="card-content">
							Most users found information easily, though the homepage and menu
							structure could be simplified.
						</p>
					</div>

					<div class="card">
						<p class="card-subtitle">Accessibility</p>
						<p class="card-content">
							The system is accessible across devices, but adding more
							accessibility options could enhance the experience.
						</p>
					</div>

					<div class="card">
						<p class="card-subtitle">Aesthetic</p>
						<p class="card-content">
							Users found the design visually appealing and consistent, with
							minor suggestions for modern design enhancements.
						</p>
						<p class="card-content">
							The platform scored high on usability, with users finding it
							intuitive and easy to use.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Study Abroad -->
		<div class="container overflow-hidden bg-primary-500 py-28">
			<div>
				<p class="mb-2 text-light">Key Takeaways</p>
				<h1
					class="hero-title space-y-1 uppercase text-light md:-space-y-1 lg:-space-y-5"
				>
					<p>What We learn</p>
					<p>from this project</p>
				</h1>
			</div>

			<ul class="mt-14 space-y-2 md:space-y-6">
				<li
					id="lists-animate-end"
					v-for="keyTakeaway in finalKeyTakeaways"
					:key="keyTakeaway"
					class="flex gap-4 text-xl text-light md:text-2xl"
				>
					<span>-></span> <span>{{ keyTakeaway }}</span>
				</li>
			</ul>
		</div>
	</section>

	<Footer class="container my-0" />
</template>

<style scoped></style>
