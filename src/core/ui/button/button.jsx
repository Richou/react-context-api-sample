import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

function Button(props) {
  const {
    onClick,
    className,
    children,
    disabled = false,
  } = props

  return (
    <button
      onClick={onClick}
      className={className ? `${className} qs-button` : 'qs-button'}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  className: null,
  disabled: false,
}

export default Button
