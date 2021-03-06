module.exports = {
	// mode: 'jit',
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
				neg60: '-60deg',
				'360': '360deg',
			},
			maxWidth: {
				'25%': '25%',
				'50%': '50%',
				'75%': '75%',
				'80%': '80%',
			},
			maxHeight: {
				'25%': '25%',
				'50%': '50%',
				'60%': '60%',
				'75%': '75%',
				'80%': '80%',
				'85%': '85%',
			},
			transitionProperty: {
				height: 'height',
				width: 'width',
			},
			transitionDuration: {
				'0': '0ms',
				'400': '400ms',
				'2000': '2000ms',
			},
			transitionDelay: {
				'0': '0ms',
				'400': '400ms',
				'1200': '1200ms',
				'2000': '2000ms',
			},
			keyframes: {
				'jump-out': {
					'0%': { transform: 'rotate(-20deg)' },
					'25%': { transform: 'rotate(5deg)' },
					'50%': { transform: 'rotate(-3deg)' },
					'75%': { transform: 'rotate(1deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
			},
			animation: {
				'jump-out': 'jump-out 0.7s ease-in-out',
				'jump-out-delay': 'jump-out 0.7s 0.6s ease-in-out',
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
