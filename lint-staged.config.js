module.exports = {
  '*.{js,jsx}': [
    'eslint ./ --ext .js --fix',
    'git add'
  ],
  '*.{scss}': [
    'stylelint --syntax=scss',
    'git add'
  ]
}
