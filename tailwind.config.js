module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      desktop: '680px',
    },
    extend: {
      spacing: {
        120: '30rem',
      },
      colors: {
        'background-white': '#F4F5F9',
        'transparent-black': 'rgba(0, 0, 0, 0.4)',
        'primary-100': '#E6EBF4',
        'primary-200': '#A2B7CE',
        'primary-400': '#436E9E',
        'primary-500': '#165698',
        'primary-600': '#053461',
        'gray-100': '#E9E9E9',
      },
      boxShadow: {
        inet: '0px 2px 6px 0px #00000026',
      },
    },
  },
  plugins: [],
}
