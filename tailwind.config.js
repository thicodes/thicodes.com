const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme("colors.white"),
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
