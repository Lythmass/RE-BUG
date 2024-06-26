import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: 'var(--dark)',
        light: 'var(--light)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
export default config;
