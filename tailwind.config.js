const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        violet: {
          1: '#7E88C3',
          2: '#9277FF',
          3: '#7C5DFA',
        },
        navy: {
          1: '#373B53',
          2: '#252945',
          3: '#1E2139',
          4: '#141625',
          5: '#0C0E16',
        },
        grey: {
          1: '#F9FAFE',
          2: '#F8F8FB',
          3: '#DFE3FA',
          4: '#888EB0',
        },
        coral: {
          1: '#FF9797',
          2: '#EC5757',
        },
      },
      screens: {
        // @media (min-width: 'n'px)
        mobile: '375px',
        tablet: '768px',
        desktop: '1280px',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        card: '8px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

