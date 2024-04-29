module.exports = {
  plugins: [
    'autoprefixer',
    'postcss-import',
    'postcss-flexbugs-fixes',
    'cssnano',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'autoplace',
        },
        stage: 2,
        features: {
          'custom-properties': false,
        },
      },
    ],
    // [
    //   '@fullhuman/postcss-purgecss',
    //   {
    //     content: ['./src/**/*.{js,jsx,ts,tsx}'],
    //     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    //     safelist: ['html', 'body'],
    //     variables: true,
    //   },
    // ],
  ],
};
