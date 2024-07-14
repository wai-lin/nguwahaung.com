export interface RadialImgText {
	label: string;
	images: Array<{
		imgUrl: string;
		size: [number, number];
		position: [number, number];
	}>;
}
type Description = Array<string | RadialImgText>;
export const AboutMe = {
	description: [
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ea, quae,",
		{
			label: " accusamus ",
			images: [
				{
					imgUrl: "https://picsum.photos/200/140",
					position: [45, -10],
					size: [200, 140],
				},
				{
					imgUrl: "https://picsum.photos/150",
					position: [-160, -50],
					size: [150, 150],
				},
				{
					imgUrl: "https://picsum.photos/200/150",
					position: [-20, -210],
					size: [200, 150],
				},
			],
		},
		"minus repudiandae quaerat qui non, culpa ducimus error hic. Molestiae",
		{
			label: " atque ",
			images: [],
		},
		"tempora porro sit, asperiores repudiandae incidunt laborum!",
		{
			label: " Lorem ",
			images: [],
		},
		"ipsum dolor sit, amet consectetur adipisicing elit.",
	] satisfies Description,
};
