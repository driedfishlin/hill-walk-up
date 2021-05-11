module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // 'media', false or 'class'
	theme: {
		extend: {
			colors: {
				't-green': {
					DEFAULT: '#2cc185',
					bright: '#43f6ae',
					light: '#91e6c4',
					dark: '#2cc185',
				},
				't-gray': {
					dark: '#323232',
					normal: '#aaaaaa',
					light: '#f4f4f4',
				},
			},
			fontFamily: {
				'noto-sans': "'Noto Sans TC', sans-serif",
			},
			minHeight: {
				auto: 'auto',
			},
			rotate: {
				'30': '30deg',
				'360': '360deg',
			},
		},
	},
	variants: {
		extend: {
			borderColor: ['active'],
			textColor: ['active'],
			backgroundColor: ['active'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
