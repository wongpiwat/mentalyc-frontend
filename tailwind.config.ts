import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#731054",
        secondary: "#707070",
        tertiary: "#8F8F8F",
        light: "#FFFFFF",
        black: "#040404",
        button: {
          primary: "#731054",
        },
        icon: {
          primary: "#731054",
          secondary: "#707070",
          light: "#FFFFFF",
        },
        chip: {
          primary: "#F8CDD9",
          valhalla: "#EFEAFD",
          info: "#E2F3FC",
          kenyanCopper: "#FFEAD5",
          success: "#D5F6DE",
          warning: "#FDF4C8",
          gray: "#EBEBEB",
        },
        gradient: {
          primary: "linear-gradient(296deg, #DE0D6F 16.23%, #731054 83.77%)",
        },
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
} satisfies Config;
