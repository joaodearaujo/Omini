import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config