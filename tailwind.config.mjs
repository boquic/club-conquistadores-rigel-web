/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  // Keep the custom `.container` defined in src/styles/components.css
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        // Paleta Rigel
        primary: '#1B2E52',
        accent: '#BE1622',
        highlight: '#FDE508',
        text: '#1a1a1a',
        light: '#f8fafc',
        dark: '#0f172a',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        primary: '0 10px 15px -3px rgba(27, 46, 82, 0.3)',
        accent: '0 10px 15px -3px rgba(190, 22, 34, 0.3)',
        highlight: '0 10px 15px -3px rgba(253, 229, 8, 0.3)',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
