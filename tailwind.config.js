module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
      },
      width: {
        '128': '32rem',
      },
      lineHeight: {
        '14': '4rem',
      },
      spacing: {
        'test': '-50%',
      }
    },
  },
  plugins: [],
}
