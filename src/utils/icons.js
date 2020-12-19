import fonts from '../assets/stylesheets/modules/fonts.module.scss'

export const config = (opts, defaultColors) => {
  const fontSize = fonts['font-size']
  return {
    width: opts.width || fontSize,
    height: opts.height || fontSize,
    colors: opts.colors || defaultColors
  }
}
