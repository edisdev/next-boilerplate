module.exports = {
  '*.scss': [
    'stylelint ./src/**/*.scss --fix',
    'git add'
  ]
}
