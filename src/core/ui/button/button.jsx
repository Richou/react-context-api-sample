import React from 'react'
import PropTypes from 'prop-types'
import AtlaskitButton from '@atlaskit/button'

import './button.scss'

function Button(props) {
  const {
    type,
    onClick,
    className,
    children,
    disabled = false,
    loading,
  } = props

  return (
    <AtlaskitButton
      type={type}
      onClick={onClick}
      className={className ? `${className} qs-button` : 'qs-button'}
      isLoading={loading}
      isDisabled={disabled}
    >
      {children}
    </AtlaskitButton>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  className: null,
  onClick: null,
  type: 'button',
  disabled: false,
  loading: false,
}

export default Button
