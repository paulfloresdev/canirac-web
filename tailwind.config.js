/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'card': '360px',
        'content': '84vw'
      },
      height: {
        'card': '280px',
      },
      borderRadius: {
        'custom': '12px',
      },
      backgroundImage: {
        'light-mode-image': "url('../public/assets/canirac.png')",
        'dark-mode-image': "url('../public/assets/canirac-dark.png')",
        'custom-gradient': 'linear-gradient(to bottom, #00768D, #00576A)',
        'custom-gradient-dark': 'linear-gradient(to bottom, #014D5E, #003945)',
      },
      colors: {
        'background': '#FAFAFA',
        'background-dark': '#2D2D32',
        'background-deep': '#232328',
        'background-darker': "#ECECEE",
        'accent': '#F1F1F3',
        'accent-dark': '#37373C',
        'selected': '#37373C',
        'selected-dark': '#FAFAFA',
        'option': '#919196',
        'primary': '#00768D',
        'primary-dark': '#00576A',
        'border': '#E4E4E6',
        'focusborder': '#D0D0D2',
        'border-dark': '#464650',
        'focusborder-dark': '#5A5A64',

      }
    },
  },
  plugins: [],
}

