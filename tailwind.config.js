/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#121212",
        well: "#181818",
        surface: "#1f1f1f",
        raised: "#282828",
        rule: "#3d3d3d",
        ink: "#ededea",
        ink2: "#c9c9c4",
        muted: "#a8a8a2",
        accent: "#1ed760",
        accentHover: "#3ce877",
        accentInk: "#07260f",
      },
      maxWidth: {
        shell: "1360px",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
