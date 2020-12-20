module.exports = {
  '*.{scss}': [
    'stylelint ./src/**/*.scss --config=.stylelintrc.js',
    'git add'
  ]
}
