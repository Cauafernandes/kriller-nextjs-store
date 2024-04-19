import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#214f59',
      primaryHover: '#4d8f9e',

      secondary: '#EAFAFE',

      white: '#FFFFFF',
      black: '#000000',

      gray50: '#F4F4F4',
      gray100: '#C4C4C4',
      gray150: '#F6F6F6',
      gray200: '#7B7C7F',
      gray250: 'rgba(255, 255, 255, 0.3)',
      gray300: '#666666',
      gray400: '#555555',
      gray500: '#4F4F4F',
      gray600: '#323232',
      gray800: 'rgba(0, 0, 0, 0.03)',
      gray850: 'rgba(0, 0, 0, 0.2)',
      gray900: 'rgba(0, 0, 0, 0.3)',
      gray950: 'rgba(0, 0, 0, 0.5)',

      pink100: '#FBE7E9',
      pink300: '#F17179',
      pink400: '#D34566',
      pink500: '#F66C85',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        sm: '768px',
        md: '992px',
        lg: '1360px',
      },
    },
  },
  plugins: [],
};
export default config;
