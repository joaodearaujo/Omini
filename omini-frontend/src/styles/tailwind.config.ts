import type { Config } from 'tailwindcss'
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        appBg: 'rgb(var(--app-bg-color) / <alpha-value>)',
        primary: 'rgb(var(--text-primary-color) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary-color) / <alpha-value>)',
        strong: 'rgb(var(--text-strong-color) / <alpha-value>)',
        transactionHover: 'rgb(var(--button-nav-color) / <alpha-value>)',
        iconBg: 'rgb(var(--icon-bg-color) / <alpha-value>)',
        progressBar: 'rgb(var(--progress-bar-color) / <alpha-value>)',
        
        link: {
          DEFAULT: 'rgb(var(--link-color) / <alpha-value>)',
          hover: 'rgb(var(--link-hover-color) / <alpha-value>)',
          bgHover: 'rgb(var(--link-bg-hover-color) / <alpha-value>)',
        },
        
        balance: {
          current: 'rgb(var(--balance-current-color) / <alpha-value>)',
          income: 'rgb(var(--balance-income-color) / <alpha-value>)',
          outcome: 'rgb(var(--balance-outcome-color) / <alpha-value>)',
        },

        status: {
          completed: {
            primary: 'rgb(var(--status-completed-primary) / <alpha-value>)',
            secondary: 'rgb(var(--status-completed-secondary) / <alpha-value>)',
          },
          pending: {
            primary: 'rgb(var(--status-pending-primary) / <alpha-value>)',
            secondarys: 'rgb(var(--status-pending-secondary) / <alpha-value>)',
          },
          canceled: {
            primary: 'rgb(var(--status-canceled-primary) / <alpha-value>)',
            secondary: 'rgb(var(--status-canceled-secondary) / <alpha-value>)',
          },
        }
      },

      fontSize: {
      'extraSmall': ['var(--text-extraSmall)', { lineHeight: '1.5' }],
      'small': ['var(--text-small)', { lineHeight: '1.5' }],
      'title': ['--text-title)', { lineHeight: '1.5' }],
      'medium': ['var(--text-medium)', { lineHeight: '1.4' }],
      'big': ['var(--text-big)', { lineHeight: '1.2', fontWeight: '500' }],
      },
    }
  },
  plugins: [
    scrollbar,
  ],
} satisfies Config