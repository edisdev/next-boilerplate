const req = require.context('@/assets/icons/', true, /\.(js)$/i)
const icons = {}

export const files = req.keys()
  .filter(icon => !icon.match(/index/))
  .map(icon => icon.replace(new RegExp('\./|(.js)', 'g'), ''))

files.map(f => icons[f] = require(`./${f}.js`).default)
export default icons
