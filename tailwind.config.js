module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
      anton: ["Anton", "sans-serif"],
      playball: ["Playball", "cursive"],
      sevillana: ["Sevillana", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        untitled: "url('./assets/untitled.png')",
        portfolio2: "url('./assets/portfolio-img2.png')",
      },
    },
  },
  plugins: [],
};
