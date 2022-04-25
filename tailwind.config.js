module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './src/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-white': '#F4F5F9',
        'primary-200': '#A2B7CE',
        'primary-400': '#436E9E',
        'primary-500': '#165698',
        'primary-600': '#053461',
        'gray-100': '#E9E9E9',
      },
      backgroundImage: {
        'icon-search': "url('/src/icons/Icon.svg')",
      },
    },
  },
  plugins: [],
}
