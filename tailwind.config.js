module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)"
        },
        footer: {
          background1: "var(--footer-bg-1)"
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
};