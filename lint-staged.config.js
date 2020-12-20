module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  '*.{scss}': [
    'stylelint ./src/**/*.scss --config=.stylelintrc.js',
    'git add'
  ]
}
