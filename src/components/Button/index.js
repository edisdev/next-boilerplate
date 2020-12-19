
import React from 'react'

import PropTypes from 'prop-types'
/**
 * 
 * Primary UI component for user interaction
 */

const Button = ({ primary, backgroundColor, size, children, ...props }) => {
	const mode = primary ? 'button--primary' : 'button--secondary'
	let customClass = props.className || ''
	delete props.className

	return (
		<button
			type="button"
			className={['button', `button--${size}`, mode, customClass].join(' ')}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	/**
   * Is this the principal call to action on the page?
   */
	primary: PropTypes.bool,
	/**
   * What background color to use
   */
	backgroundColor: PropTypes.string,
	/**
   * How large should the button be?
   */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
   * Button contents
   */
	/**
   * Optional click handler
   */
	onClick: PropTypes.func,
}

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
}


export default Button
