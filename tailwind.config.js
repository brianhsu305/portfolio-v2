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
				primary: '#ffb3c1',
				secondary: '#FFFFFF',
				description: '#9CA3AF',
				background: '#212529'
			},
			fontFamily: {},
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
			},
		},
	},
};
