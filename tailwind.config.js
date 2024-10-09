/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lt': '500px',
        '450': '450px',
        '1110': '1110px'
      },
      colors: {
        'black': '#191919',
        'black-40': 'rgba(0, 0, 0, 0.4)',
        'second-black': '#000',
        'dark-blue': '#101010',
        'white-opc-10': 'rgba(255, 255, 255, 0.10)',
        'white-opc-49': 'rgba(255, 255, 255, 0.49)',
        'white-opc-75': 'rgba(255, 255, 255, 0.75)',
        'reddish-orange': '#D87D4A',
        'reddish-hover': '#FBAF85',
        'lightgray': '#F1F1F1',
        'almost-white': '#FAFAFA',
        'second-lightgray': 'hsl(0,0%,86%)',
        'dark-gray': '#4C4C4C',
        'white': '#FFF',
        'red': '#D73C3C',
        'third-lightgray': '#CFCFCF',
        'dark-bg': 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'new-product-mobile': 'url("/assets/home/mobile/image-header.jpg")',
        'new-product-tablet': 'url("/assets/home/tablet/image-header.jpg")',
        'new-product-desktop': 'url("/assets/home/desktop/image-hero.jpg")',
        'ZX7-speaker-mobile': 'url("/assets/product-zx7-speaker/mobile/zx7-speaker.png")',
        'ZX7-speaker-tablet': 'url("/assets/product-zx7-speaker/tablet/zx7-speaker.png")',
        'ZX7-speaker-desktop': 'url("/assets/product-zx7-speaker/desktop/zx7-speaker.png")',
        'yx1-earphones-mobile': 'url("/assets/product-yx1-earphones/mobile/image-gallery-2.png")',
        'yx1-earphones-tablet': 'url("/assets/product-yx1-earphones/tablet/image-gallery-2.jpg")',
        'yx1-earphones-desktop': 'url("/assets/product-yx1-earphones/desktop/image-gallery-2.jpg")',
      },
    },
  },
  plugins: [],
}