/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nav-top': '#FFD700',
        'nav-about': '#0066FF',
        'nav-business': '#9933FF',
        'nav-ir': '#FF66CC',
        'nav-sustainability': '#00CCFF',
        'nav-news': '#FF9900',
        'nav-contact': '#FF3333',
        accent: '#00CC00',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

