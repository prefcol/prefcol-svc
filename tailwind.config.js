// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       spacing: {
//         'hex-size': '8vmin', // Hexagon size
//       },
//       animation: {
//         shimmer: 'shimmer 2s infinite linear',
//       },
//       colors: {
//         primary: '#ee75d2',
//         secondary: '#75d8ee',
//         tertiary: '#deee75',
//         quaternary: '#9375ee',
//         surface: 'black',
//       },
//       keyframes: {
//         ripple: {
//           '0%': { transform: 'scale(1)', opacity: '1' },
//           '50%': { transform: 'scale(0.8)', opacity: '0.42' },
//           '70%': { transform: 'scale(1.5)', opacity: '1' },
//           '100%': { transform: 'scale(1)', opacity: '1' },
//         },
//         shimmer: {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(100%)' },
//         },
//       },
//       animation: {
//         ripple: 'ripple 0.45s ease-in-out',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'hex-size': '8vmin', // Hexagon size
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        ripple: 'ripple 0.45s ease-in-out',
      },
      colors: {
        primary: '#ee75d2',
        secondary: '#75d8ee',
        tertiary: '#deee75',
        quaternary: '#9375ee',
        surface: 'black',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.8)', opacity: '0.42' },
          '70%': { transform: 'scale(1.5)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
