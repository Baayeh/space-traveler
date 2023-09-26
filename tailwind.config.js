/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img':
          "url('https://res.cloudinary.com/dskl0qde4/image/upload/v1678474160/space_s8mxgr.jpg')",
        'main-img':
          "url('https://res.cloudinary.com/dskl0qde4/image/upload/v1678482474/philip-myrtorp-HPNLQH3UNSM-unsplash_tp61kn.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
