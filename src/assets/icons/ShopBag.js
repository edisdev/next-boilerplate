import PropTypes from 'prop-types';

import { config } from '@/utils/icons.js'

const ShopBag = (options) => {
  const opts = config(options, ['#CCD6DD', '#66757F', '#E1E8ED', '#292F33'])
  let colors = opts.colors

  return <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"
    width={opts.width}
    height={opts.height}>
    <path fill={colors[0]} d="M31 22H11L9 10h24z" />
    <path fill={colors[1]} d="M32.984 27h-22C9.89 27 9 26.109 9 25.016S9.906 23 11 23l.007-.001.008.001H31c.489 0 .906-.354.986-.836l2-12c.049-.29-.033-.586-.224-.811C33.573 9.129 33.294 9 33 9H9.817l-1.04-6.166c-.079-.473-.484-.792-.942-.814-.016-.003-.027-.02-.043-.02H3c-.552 0-1 .448-1 1s.448 1 1 1h3.946l2.903 17.216c-1.642.493-2.849 2-2.849 3.8C7 27.213 8.788 29 10.984 29h22c.553 0 1-.447 1-1s-.447-1-1-1zM30.82 17h-3.307l.273-2h3.366l-.332 2zm-5.326 0H22v-2h3.767l-.273 2zM20 17h-3.494l-.273-2H20v2zm-5.512 0h-3.307l-.333-2h3.367l.273 2zm-2.641 4l-.333-2h3.247l.273 2h-3.187zm5.206 0l-.273-2H20v2h-2.947zM22 21v-2h3.22l-.273 2H22zm4.967 0l.273-2h3.247l-.333 2h-3.187zm4.852-10l-.333 2H28.06l.273-2h3.486zm-5.505 0l-.273 2H22v-2h4.314zM20 11v2h-4.041l-.273-2H20zm-6.333 0l.273 2h-3.427l-.333-2h3.487z" />
    <circle fill={colors[2]} cx="14" cy="31" r="3" />
    <path fill={colors[3]} d="M14 35c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
    <circle fill={colors[2]} cx="28" cy="31" r="3" />
    <path fill={colors[3]} d="M28 35c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
  </svg>
}

ShopBag.propTypes = {
  /**
   * Icon width size
  */
  width: PropTypes.number,
  /**
   * Icon height size
  */
  height: PropTypes.number,
  /**
   * Icon colors
  */
  colors: PropTypes.array
}

export default ShopBag