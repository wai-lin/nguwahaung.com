export const seoMeta = reactive({
	title: "Ngu Wah Aung",
	imageUrl: "",
	description: "EXPERIENCED PRODUCT DESIGNER & DEVELOPER BASED IN BANGKOK",
});

export function useSetSeoMeta() {
	useSeoMeta({
		title: seoMeta.title,
		ogTitle: seoMeta.title,
		description: seoMeta.description,
		ogDescription: seoMeta.description,
		ogImage: seoMeta.imageUrl,
		twitterCard: "summary_large_image",
	});
}
