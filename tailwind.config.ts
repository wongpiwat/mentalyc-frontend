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
        primary: "#161317",
        secondary: "#463F4B",
        tertiary: "#9A96B4",
        light: "#FFFFFF",
        outline: "#54577A",
        button: {
          primary: "#3D53DB",
          secondary: "#7A0619",
        },
        icon: {
          primary: "#463F4B",
          secondary: "#9A96B4",
          light: "#FFFFFF",
        },
        chip: {
          primary: "#F8CDD9",
        }
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
} satisfies Config;
