/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: "'Epilogue', sans-serif",
    },
    extend: {
      fontFamily: {
        clashLight: 'ClashDisplay-Light',
        clash: 'ClashDisplay-Regular',
        clashMedium: 'ClashDisplay-Medium',
        clashSemiBold: 'ClashDisplay-SemiBold',
        clashBold: 'ClashDisplay-Bold',
        clashVariable: 'ClashDisplay-Variable',

        redHatDisplay: 'Red Hat Display',
      },
      colors: {
        primary: {
          500: '#4640DE',
        },
        secondary: {
          100: '#D6DDEB',
        },
        backgroundDark: '#202430',
      },
    },
  },
  plugins: [],
};
