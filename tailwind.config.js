/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				
			},
			transitionProperty: {
				'height': 'height',
				'spacing': 'margin, padding',
			  }
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
