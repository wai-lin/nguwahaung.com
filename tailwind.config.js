/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			fontFamily: {
				body: [
					"Geist",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			fontSize: {
				header: "90px", // 80px
				"title-lg": "2rem", // 32px
				"title-md": "1.25rem", // 20px
				body: "1rem", // 16px
			},
			colors: {
				white: "#FFFFFF",
				light: "#FEFEFE",
				dark: "#292929",
				"medium-dark": "#545454",
				"light-dark": "#7E7E7E",
				primary: {
					50: "#F3F7FC",
					100: "#E6EFF8",
					200: "#C7DCF0",
					300: "#96C0E3",
					400: "#5E9ED2",
					500: "#3880BA",
					600: "#2968A0",
					700: "#225382",
					800: "#20486C",
					900: "#1F3D5B",
					950: "#15273C",
				},
			},
		},
	},
	plugins: [],
};
