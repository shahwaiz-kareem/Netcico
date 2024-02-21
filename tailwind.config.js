/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx, html,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx, html,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx, html,mdx}",
    "./src/app/(group-name)/**/*.{js,ts, html,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
