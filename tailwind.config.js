/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
    theme: false,
    base: false,
    components: false
  },
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
}

