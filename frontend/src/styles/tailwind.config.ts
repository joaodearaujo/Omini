import type { Config } from 'tailwindcss'
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [
    scrollbar,
  ],
} satisfies Config