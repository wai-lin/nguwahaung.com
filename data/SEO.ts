export const seoMeta = reactive({
	title: "",
	imageUrl: "",
	description: "",
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
