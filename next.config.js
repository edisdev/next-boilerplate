const path = require('path')

module.exports = {
  images: {
    loader: 'imgix'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/stylesheets')],
  }
}
