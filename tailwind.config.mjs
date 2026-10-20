/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090B10', panel: '#0D1118', card: '#121722', elevated: '#181F2D',
        accent: '#818CF8', violet: '#A78BFA', mint: '#34D399', sky: '#7DD3FC',
        muted: '#A1AAB8', faint: '#707B8D',
      },
      fontFamily: { sans: ['Manrope', 'ui-sans-serif', 'system-ui'], mono: ['DM Mono', 'ui-monospace', 'monospace'] },
    },
  },
};
