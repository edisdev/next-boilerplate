module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  '*.{css,less,sass}': [
    'stylelint ./src/**/*.scss --fix',
    'git add'
  ]
}
