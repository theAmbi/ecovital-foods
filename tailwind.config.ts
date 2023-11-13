import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      container: {
        center: true,
        padding: {
          lg: "2rem",
          xl: "3rem",
        },
      },

      colors: {
        // dark: "rgba(0,0,0,0.8)",
        heroBG: "#F0FFE2",
        headingGreen: "#7EBD42",
        paragraphColor: "#595C61",
        mainGreen: "#7EBD42",
        headingDark: "#1B2C0C",
        greenButton: "#1B2C0C",
        reviewGray: "#F2F5F7",
        placeholder: "#C7CCCF",
        ctaPressed: "#6DA836",
      },

      animation: {
        "scale-pulse": "scaleBounce 1.5s ease infinite",
      },

      keyframes: {
        scaleBounce: {
          "0%, 100%": { transform: "scale(110%)" },
          "50%": { transform: "scale(90%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
