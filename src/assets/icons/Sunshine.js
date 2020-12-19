import React from 'react'
import PropTypes from 'prop-types'

import { config } from '@/utils/icons'

const Sunshine = (options) => {
  const opts = config(options, ['#FFD983', '#66757F', '#FFCC4D', '#5B6876'])
  let colors = opts.colors

  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    width={opts.width}
    height={opts.height}>
    <path fill={colors[0]} d="M0 18c0 9.941 8.059 18 18 18 .295 0 .58-.029.87-.043C24.761 33.393 29 26.332 29 18 29 9.669 24.761 2.607 18.87.044 18.58.03 18.295 0 18 0 8.059 0 0 8.059 0 18z" />
    <path fill={colors[1]} d="M29 18C29 9.669 24.761 2.607 18.87.044 28.404.501 36 8.353 36 18c0 9.646-7.594 17.498-17.128 17.956C24.762 33.391 29 26.331 29 18z" />
    <circle fill={colors[2]} cx="10.5" cy="8.5" r="3.5" />
    <circle fill={colors[2]} cx="20" cy="16" r="3" />
    <circle fill={colors[2]} cx="21.5" cy="27.5" r="3.5" />
    <circle fill={colors[2]} cx="21" cy="6" r="2" />
    <circle fill={colors[2]} cx="3" cy="18" r="1" />
    <circle fill={colors[3]} cx="30" cy="9" r="1" />
    <circle fill={colors[2]} cx="15" cy="31" r="1" />
    <circle fill={colors[3]} cx="32" cy="19" r="2" />
    <circle fill={colors[2]} cx="10" cy="23" r="2" />
  </svg>
}

Sunshine.propTypes = {
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

export default Sunshine
