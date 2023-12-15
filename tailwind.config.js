/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '360px',
			md: '640px',
		},
		extend: {
			colors: {
				primary: '#F9A8D4',
				secondary: '#FFFFFF',
				description: '#9CA3AF',
				background: '#242424'
			},
			fontFamily: {},
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
			},
		},
	},
};
