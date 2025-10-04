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
        'exam-royal-blue': '#2563EB',
        'exam-soft-blue': '#60A5FA',
        'exam-cool-gray': '#9CA3AF',
        'exam-light-gray': '#F3F4F6',
        'exam-dark-slate': '#374151',
        'exam-soft-orange': '#FDBA74',
        'exam-pale-yellow': '#FACC15',
        'exam-success-green': '#22C55E',
        'exam-error-red': '#EF4444',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
