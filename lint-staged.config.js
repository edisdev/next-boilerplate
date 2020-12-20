module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  '*.{scss}': [
    'stylelint ./src/**/*.scss --syntax=scss --fix',
    'git add'
  ]
}
