import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F3E8',
          200: '#EFE6D0',
          DEFAULT: '#FDFBF7',
        },
        primary: {
          DEFAULT: '#0F766E', // teal-700
          light: '#14B8A6', // teal-500
          dark: '#0D9488', // teal-600
          hover: '#115E59', // teal-800
        },
        secondary: {
          DEFAULT: '#854D0E', // yellow-800 (warm brown/bronze)
          light: '#A16207', // yellow-700
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
