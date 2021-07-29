// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './containers/**/*.{js,jsx,ts,tsx}',
    ],
    safelist:[],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    purgecss,
    'tailwindcss',
    'autoprefixer',
  ]
}
