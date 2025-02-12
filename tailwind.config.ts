import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This one covers all src files
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        'card-bg': "var(--card-bg)",
      },
      boxShadow: {
        'custom': '0 4px 6px var(--card-shadow)',
      },
      backgroundColor: {
        'custom-bg': "var(--background-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
