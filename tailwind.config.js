/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'sm': '360px',
			'md': '640px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1540px',
		},
		extend: {
			screens:{
				'qhd':'2560px',
				'uhd': '3840px'
			},
			colors: {
				primary: '#ffb3c1',
				secondary: '#e9ecef',
				description: '#9CA3AF',
				background: '#212529',
			},
			fontFamily: {},
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
			},
		},
	},
};
