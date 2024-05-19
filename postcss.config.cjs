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
  ],
};
