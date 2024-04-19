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
        primary: '#4640DE',
        secondary: '#CCCCF5',
        tertiary: '#E7F6FD',
        accent: {
          yellow: '#FFB836',
          green: '#56CDAD',
          red: '#FF6550',
          blue: '#26A4FF',
          purple: '#7B61FF',
        },
        neutral: {
          100: '#F8F8FD',
          200: '#F9FAFC',
          300: '#E4E5E7',
          400: '#A8ADB7',
          500: '#7C8493',
          600: '#515B6F',
          700: '#25324B',
        },
        backgroundDark: '#202430',
      },
    },
  },
  plugins: [],
};
