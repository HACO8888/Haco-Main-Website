/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#c6e3ff",
          "secondary": "#7580ce",
          "accent": "#3fe289",
          "neutral": "#19212A",
          "base-100": "#343546",
          "info": "#6DAAD0",
          "success": "#42D7C5",
          "warning": "#F6BB5A",
          "error": "#E56C7A",
        },
      },
    ],
  },

  plugins: [require('daisyui'),],
}
