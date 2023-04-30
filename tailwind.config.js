/** @type {import('tailwindcss').Config} */

export const content = ['./index.html', './src/**/*.{js,ts,jsx}'];

export const theme = {
  extend: {
    colors: {
      'very-dark-gray': 'hsl(0, 0%, 17%)',
      'dark-gray': 'hsl(0, 0%, 59%)',
    },
    backgroundImage: {
      desktopImage: "url('/desktop.png')",
      mobileImage: "url('/mobile.png')",
    },
  },
  fontWeight: { light: '400', semiBold: '500', extraBold: '700' },
};

export const plugins = [];
