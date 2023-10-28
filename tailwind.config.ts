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
      },

      colors: {
        // dark: "rgba(0,0,0,0.8)",
        heroBG: "#F0FFE2",
        headingGreen: "#7EBD42",
        paragraphColor: "#595C61",
        mainGreen: "#7EBD42",
        headingDark: "#1B2C0C",
        greenButton: "#1B2C0C",
      },
    },
  },
  plugins: [],
};
export default config;
