module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      desktop: '680px',
      'desktop-lg': '992px',
    },
    extend: {
      fontSize: {
        mini: ['9px', '12px'],
        tiny: ['15px', '20px'],
        10.5: ['42px', '57px'],
        mobile5xl: '2.625rem',
      },
      colors: {
        'background-white': '#F4F5F9',
        'transparent-black': 'rgba(0, 0, 0, 0.4)',
        'primary-100': '#E6EBF4',
        'primary-200': '#A2B7CE',
        'primary-400': '#436E9E',
        'primary-500': '#165698',
        'primary-600': '#053461',
        'secondary-100': '#FDE5F2',
        'secondary-200': '#F4B8D9',
        'secondary-400': '#DB579F',
        'secondary-500': '#E3238B',
        'secondary-600': '#AF0E65',
        'gray-100': '#E9E9E9',
        'gray-300': '#A5A5A5',
        'gray-400': '#818181',
        'gray-500': '#A5A5A5',
      },
      boxShadow: {
        drop: '0px 2px 6px 0px #00000026',
        1: '0px 4px 4px 0px #00000040, 0px -1px 4px 0px #0000001A',
      },
      maxWidth: {
        120: '480px',
        138: '552px',
        180: '720px',
      },
      minWidth: {
        42: '168px',
        94: '375px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
