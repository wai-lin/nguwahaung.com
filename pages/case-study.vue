<script setup lang="ts">
import { gsap } from "gsap";
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
	<Header class="text-white" />

	<section class="h-screen bg-light">
		<div class="container py-20 md:py-24">
			<div class="grid grid-cols-6 gap-0 md:gap-20">
				<div class="col-span-6 flex flex-col justify-center md:col-span-2">
					<div class="space-y-8">
						<div id="lists-animate" ref="sectionRefs">
							<h5
								class="text-lg font-semibold uppercase text-primary-500 md:text-title-md"
							>
								Project
							</h5>
							<hr class="my-2 border-gray-300" />
							<p class="text-dark">UNILINKS</p>
							<p class="text-dark">
								Personalized study abroad platform for international students.
							</p>
						</div>
						<div
							v-for="info in infos"
							:key="info.title"
							ref="sectionRefs"
							id="lists-animate"
						>
							<h5
								class="text-lg font-semibold uppercase text-primary-500 md:text-title-md"
							>
								{{ info.title }}
							</h5>
							<hr class="my-2 border-gray-300" />
							<p class="text-dark">
								{{ info.content }}
							</p>
						</div>
					</div>
				</div>

				<div class="col-span-6 mt-10 overflow-hidden md:col-span-4 md:mt-0">
					<img
						ref="imageRefs"
						src="/public/images/case-study-thumbnail.jpg"
						class="h-auto w-full object-cover object-left md:h-[580px]"
					/>
				</div>
			</div>
		</div>

		<!-- The Brief -->
		<div class="container my-20" ref="briefRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle mini-title="Introduction" title="The Brief" />
				</div>
				<div class="col-span-6 space-y-10 md:col-span-4">
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
						<div class="space-y-2">
							<p class="card-subtitle">Complex Application Processes</p>
							<p class="card-content">
								Finding accurate information about programs, understanding
								diverse requirements, and preparing strong applications is
								difficult due to scattered and inconsistent information.
							</p>
						</div>

						<div class="space-y-2">
							<p class="card-subtitle">Managing Multiple Applications</p>
							<p class="card-content">
								Keeping track of multiple institutions' application statuses,
								deadlines, and requirements can be overwhelming without
								real-time updates and centralized management.
							</p>
						</div>

						<div class="space-y-2">
							<p class="card-subtitle">Financial Concerns</p>
							<p class="card-content">
								Students need transparent information about tuition fees,
								scholarships, and other costs, as well as assistance in finding
								and applying for financial aid.
							</p>
						</div>
					</div>

					<div class="card bg-primary-50">
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
				src="public/images/brief-dummy.png"
				alt="people-group"
				class="h-auto max-h-[500px] w-full object-cover"
			/>
		</div>

		<!-- Ecosystem Analysis -->
		<div class="container my-20" ref="ecosystemRef">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle
						mini-title="Business Opportunities"
						title="Understanding the application process"
					/>
				</div>
				<div class="col-span-6 space-y-10 overflow-hidden md:col-span-4">
					<div class="card">
						<h2 class="card-title">Comprehensive UX Analysis</h2>
						<p class="card-subtitle"></p>
						<p class="card-content">
							UniLinks conducts a comprehensive ecosystem analysis to understand
							the educational landscape, identify key stakeholders, and assess
							market opportunities. This analysis helps us tailor our
							consultancy services to effectively link students with top
							universities, ensuring a strategic fit and optimal outcomes for
							both students and educational institutions.
						</p>
					</div>

					<div>
						<img
							ref="imageRefs"
							src="public/images/ecosystem.png"
							class="w-full"
						/>
					</div>
				</div>
			</div>

			<div class="my-10 overflow-hidden">
				<img
					ref="imageRefs"
					src="public/images/ecosystem-half.png"
					alt="people-group"
					class="mx-auto h-auto w-5/6 object-cover"
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
				<div class="col-span-6 space-y-10 md:col-span-4">
					<div class="card">
						<h2 class="card-title">Researching Phase</h2>
						<p class="card-subtitle">
							Comprehensive Information Hub with Personalized Program
							Recommendations and Interactive Tools
						</p>
						<p class="card-content">
							Create a centralized platform that aggregates detailed information
							about programs, universities, admission requirements, and student
							reviews from various sources, utilizes an AI-driven recommendation
							engine to suggest programs based on the student’s profile and
							interests, and offers interactive tools like comparison charts and
							virtual tours to help students effectively compare different
							programs and universities.
						</p>
						<p class="card-subtitle">Opportunity 1</p>

						<img
							ref="imageRefs"
							src="public/images/opportunity-1.png"
							class="w-full"
						/>
					</div>

					<div class="card">
						<h2 class="card-title">Planning Phase</h2>
						<p class="card-subtitle">
							Integrated Application Checklist and Real-Time Tracking System
						</p>
						<p class="card-content">
							Provide an integrated checklist and real-time tracking system to
							help students stay organized with their application tasks,
							deadlines, and document requirements, ensuring they receive timely
							updates on their application status.
						</p>
						<p class="card-subtitle">Opportunity 2</p>

						<img
							ref="imageRefs"
							src="public/images/opportunity-1.png"
							class="w-full"
						/>
					</div>

					<div class="card">
						<h2 class="card-title">Applying Phase</h2>
						<p class="card-subtitle">
							Comprehensive Application Assistance and Document Management
							Services
						</p>
						<p class="card-content">
							Offer expert guidance and support for the application process,
							including document review and essay writing assistance, and create
							a secure platform for uploading, managing, and submitting
							application documents, including translation and verification
							services.
						</p>
						<p class="card-subtitle">Opportunity 3</p>

						<img
							ref="imageRefs"
							src="public/images/opportunity-1.png"
							class="w-full"
						/>
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
				<div class="col-span-6 space-y-10 md:col-span-4">
					<div class="card">
						<h2 class="card-title">Facebook and Instagram Pages</h2>
						<p class="card-content">
							Strengths: Share scholarship and university information online for
							free, providing updates and useful tips for students.
						</p>
						<p class="card-content">
							Limitations: Only share information without offering any
							application support or personalized guidance.
						</p>
					</div>

					<div class="card">
						<h2 class="card-title">University Admission Agencies</h2>
						<p class="card-content">
							Strengths: Assist students with the admission process, including
							consultation, document checking, and university payment handling.
						</p>
						<p class="card-content">
							Limitations: The range of program choices is very limited as
							students can only apply to universities that have partnerships
							with the agencies.
						</p>
					</div>

					<div class="card">
						<h2 class="card-title">Scholarship Information Portals</h2>
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

			<div class="my-10">
				<img
					ref="imageRefs"
					src="public/images/competitive-analytics.png"
					alt="people-group"
					class="mx-auto h-auto w-5/6 object-cover"
				/>
			</div>
		</div>

		<!-- Study Abroad -->
		<div class="container bg-primary-400 py-20">
			<div>
				<p class="mb-2 text-light">CONCEPT</p>
				<h1
					class="hero-title space-y-1 uppercase text-light md:-space-y-1 lg:-space-y-4"
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
				<div class="col-span-6 space-y-10 md:col-span-4">
					<div class="card">
						<h2 class="card-title">Interviews Conducted:</h2>
						<p class="card-content">
							20 in-depth interviews with international students who are
							planning to study in Thailand or have recently completed their
							application process so that they would be able to share their
							experience along the application journey.
						</p>
						<img
							ref="imageRefs"
							src="public/images/interview.png"
							class="w-full"
						/>
					</div>

					<div class="card">
						<h2 class="card-title">What we learned</h2>
						<ul class="ml-4 list-disc space-y-8">
							<li class="card-content" v-for="learn in learns">
								<strong class="font-extrabold text-dark">
									{{ learn.title }}
								</strong>
								<span class="text-medium-dark">
									{{ learn.content }}
								</span>
							</li>
						</ul>
						<img
							ref="imageRefs"
							src="public/images/what-we-learned.png"
							class="w-full"
						/>
					</div>

					<div class="card bg-primary-50">
						<h2 class="card-title">KEY TAKEAWAYS</h2>
						<ul class="ml-4 list-disc space-y-8">
							<li class="card-content" v-for="keyTakeaway in keyTakeaways">
								<strong class="font-extrabold text-dark">
									{{ keyTakeaway.title }}
								</strong>
								<span class="text-medium-dark">
									{{ keyTakeaway.content }}
								</span>
							</li>
						</ul>
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
						mini-title=" Analyzing research"
						title="Distilling the research into personas"
					/>
				</div>
				<div class="col-span-6 md:col-span-4">
					<div class="card border-0">
						<h2 class="card-title">Persona 1</h2>
						<img
							ref="imageRefs"
							src="public/images/persona-1.png"
							class="w-full"
						/>
					</div>
					<div class="card border-0">
						<h2 class="card-title">Persona 2</h2>
						<img
							ref="imageRefs"
							src="public/images/persona-2.png"
							class="w-full"
						/>
					</div>
					<div class="card border-0">
						<h2 class="card-title">Persona 3</h2>
						<img
							ref="imageRefs"
							src="public/images/persona-3.png"
							class="w-full"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- User Flow -->
		<div class="container py-20">
			<div id="section-header" class="md:sticky md:top-10 lg:sticky">
				<p class="text-medium-dark">User Flow</p>
				<h1 class="section-title">
					How might Maria find the right study <br />
					abroad program for her?
				</h1>
				<h2 class="section-subtitle md:mt-10 lg:mt-20">Wireframe</h2>
			</div>
		</div>
		<div class="my-10">
			<img
				ref="imageRefs"
				src="public/images/wireframe.png"
				alt="people-group"
				class="mx-auto h-screen w-full object-cover"
			/>
		</div>

		<div class="container pb-10 pt-20">
			<h1 id="section-header" class="section-title">Final UI Design</h1>
		</div>
		<div class="mb-10 w-screen overflow-hidden">
			<img
				ref="imageRefs"
				src="public/images/final-ui-design.png"
				alt="people-group"
				class="mx-auto h-screen w-full object-cover"
			/>
		</div>

		<div class="container py-20">
			<SectionTitle
				class="pb-10 md:block md:pb-10 lg:block"
				mini-title="Sitemap"
				title="Developing the app structures"
			/>
			<div class="sm:mt-10 md:mt-0">
				<img
					ref="imageRefs"
					src="public/images/sitemap.png"
					alt="people-group"
					class="mx-auto h-auto w-full object-cover"
				/>
			</div>
		</div>

		<div class="container py-20">
			<SectionTitle
				class="pb-10 md:block md:pb-10 lg:block"
				mini-title="User-flow Diagram"
				title="From concept to reality: Beginning with user flows."
			/>
			<div class="sm:mt-10 md:mt-0">
				<img
					ref="imageRefs"
					src="public/images/user-flow-diagram.png"
					alt="people-group"
					class="mx-auto h-screen w-full object-cover"
				/>
			</div>
		</div>

		<div class="container py-20">
			<div class="relative grid grid-cols-6 gap-10 md:gap-20">
				<div class="col-span-6 md:col-span-2">
					<SectionTitle
						mini-title="User Feedback"
						title="Usability Test Results"
					/>
				</div>
				<div class="col-span-6 space-y-6 overflow-hidden md:col-span-4">
					<div
						class="card"
						v-for="usabilityResult in usabilityResults"
						:key="usabilityResult.title"
					>
						<h2 class="card-title">{{ usabilityResult.title }}</h2>
						<div class="space-y-2">
							<div
								class="card-content space-y-1"
								v-for="result in usabilityResult.results"
							>
								<p>{{ result.content }}</p>
								<p class="ml-4">. {{ result.score }}</p>
							</div>
						</div>
					</div>

					<div class="card">
						<h2 class="card-title">SUS Score Calculation</h2>
						<p class="card-content font-semibold">
							Each question scored on a scale from 1 (strongly disagree) to 5
							(strongly agree). The average scores from all 10 users were
							calculated for each question. The average SUS score was calculated
							to be 87 (out of 100), indicating a high level of usability.
						</p>
					</div>

					<div class="card bg-primary-50">
						<h2 class="card-title">Key Takeaways from SUS Testing:</h2>
						<ul class="ml-4 list-disc space-y-2">
							<li class="card-content" v-for="testing in subTesting">
								<strong class="font-extrabold text-dark">
									{{ testing.title }}
								</strong>
								<span class="text-medium-dark">
									{{ testing.content }}
								</span>
							</li>
						</ul>
					</div>

					<div class="card border-0 px-0">
						<div class="card-title">Questionnaire Sheet We Asked</div>
						<div class="mt-10">
							<img
								ref="imageRefs"
								src="public/images/questionaire.png"
								alt="people-group"
								class="h-auto w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Study Abroad -->
		<div class="container overflow-hidden bg-primary-400 pt-20">
			<div>
				<p class="mb-2 text-light">Key Takeaways</p>
				<h1
					class="hero-title space-y-1 uppercase text-light md:-space-y-1 lg:-space-y-4"
				>
					<p>What We learn from</p>
					<p>this project</p>
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

	<!-- <Footer class="container" /> -->
</template>
