/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		fontSize: {
			xs: 10,
			sm: 12,
			md: 14,
			lg: 16,
		},
		colors: {
			transparent: 'transparent',
			
			light: {
				background: "#EDF2F7",
				text: "#333849",
				actions: "#4F4D4D",
				div: "#797D9A",

			},

			dark: {
				background: "#212532",
				text: "#FFFFFF",
				actions: "#797D9A",
				div: "#333849",

			},

			//colors
			"blue-light": "#6F6FE7",
			"red-light": "#F27878",
			"green-light": "#5CB95C",
			"orange-light": "#D7873D",
			"cian-light": "#3DC4D7",
			"purple-light": "#9747FF",
			"pink-light": "#FF47E2",
			"yellow-light": "#BDC01F",
			
		},
		extend: {
			fontFamily: {
				sans: "Roboto, Montserrat, sans-serif",
			},
		},
	},
	plugins: [],
};
