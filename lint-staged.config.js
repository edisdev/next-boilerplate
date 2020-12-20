module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  '*.scss': [
    'stylelint ./src/**/*scss --fix',
    'git add'
  ]
}
