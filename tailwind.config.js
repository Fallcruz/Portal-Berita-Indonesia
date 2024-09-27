/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
				"plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"black-primary": "#000000",
				"black-secondary": "#1E1F20",
				"white-blur": "#FFFFFFcc",
				"white-primary": "#FFFFFF",
				"white-secondary": "#F7F7F7",
				"gray-primary": "#707070",
				"gray-secondary": "#CCCCCC",
				"blue": "#1668E8",
				"green": "#C7F2AB",
			},
		},
	},
	plugins: [],
};
