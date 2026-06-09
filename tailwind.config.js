/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        tp: {
          bg: '#0a1a12',
          surface: '#0d2218',
          border: '#1a3d28',
          'border-dim': '#132d1c',
          'border-bright': '#2a5c38',
          green: '#4ade80',
          'green-light': '#86efac',
          'green-dim': '#6b9e7a',
          'green-muted': '#4d7a5e',
          'text-primary': '#e8f5ec',
          'text-secondary': '#c8e6d4',
          'text-muted': '#86a893',
          amber: '#fbbf24',
          'amber-bg': '#2d2010',
          'amber-border': '#5c3d10',
          blue: '#60a5fa',
          'blue-bg': '#0e1e38',
          red: '#f87171',
          'red-bg': '#1a0d10',
          'red-border': '#4d1a22',
        }
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 6px #4ade80' },
          '50%': { boxShadow: '0 0 14px #4ade80' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease both',
        'pulse-glow': 'pulse_glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
