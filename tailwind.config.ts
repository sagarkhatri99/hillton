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
          50: '#FDFBF7', // Keep for very light bg
          100: '#F5F5DC', // Soft Beige
          200: '#E8E8C8', // Darker Beige
          DEFAULT: '#F5F5DC',
        },
        primary: {
          DEFAULT: '#228B22', // Forest Green
          light: '#4CAF50', // Lighter Green
          dark: '#1B6E1B', // Darker Forest Green
          hover: '#1B6E1B',
        },
        secondary: {
          DEFAULT: '#E2725B', // Warm Terracotta
          light: '#F08C78',
        },
        mint: {
          DEFAULT: '#98FB98', // Mint Green
          light: '#B0FCC0',
        },
        calmBlue: {
          DEFAULT: '#ADD8E6', // Calming Blue
          light: '#CBE7F0',
        }
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
