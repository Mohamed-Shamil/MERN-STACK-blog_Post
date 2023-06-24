import flowbiteTypography from 'flowbite-typography';
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        'italiana': ['Italiana', 'serif'],
      },
      colors: {
       emarald : "#ecfdf5",
       homebg: "#E7F6F2",
       exteal: "#004D51",
       blackyteal: "#002C2C",
       sideclr: "#a5c9c9"

      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.45)',
            '0 45px 65px rgba(0, 0, 0, 0.50)'
        ]
      }
    },
  },
  plugins: [
    flowbiteTypography,
  ],


    }
  




