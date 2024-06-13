/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { fontFamily: { body: ["Red Hat Text"] } },
    colors: {
      "grayish-blue": "var(--grayish-blue)",
      "soft-red": "var(--soft-red)",
      "--dark-desaturated-blue": "var(--dark-desaturated-blue)",
      "--very-dark-blue": "var(--very-dark-blue)",
      "--very-darkest-blue": "var(--very-dark-blue)",
    },
  },
  plugins: [],
};
