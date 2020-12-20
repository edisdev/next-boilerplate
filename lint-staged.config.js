module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  '*.{scss}': [
    'stylelint ./**/*.scss --fix',
    'git add'
  ]
}
