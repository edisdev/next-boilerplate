module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  './src/**/*.scss': [
    'stylelint ./src/**/*.scss --config=.stylelintrc.js',
    'git add'
  ]
}
