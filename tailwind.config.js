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
				header: "5rem", // 80px
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
					50: "#FFF1F4",
					100: "#FEE5EA",
					200: "#FDCED9",
					300: "#FBA6BB",
					400: "#F87496",
					500: "#EE3167",
					600: "#DC2260",
					700: "#BA1651",
					800: "#9C154A",
					900: "#851645",
					950: "#4A0722",
				},
			},
		},
	},
	plugins: [],
};
