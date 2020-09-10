import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './button-card.scss'

function ButtonCard({ onClick, disabled, children, className }) {
  function onClickHandler() {
    if (!disabled) onClick()
  }

  return (
    <div
      className={clsx('button-card', disabled && 'disabled', className !== null ? className : '' )}
      onClick={onClickHandler}
    >
      {children}
    </div>
  )
}

ButtonCard.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

ButtonCard.defaultProps = {
  onClick: () => {},
  children: null,
  disabled: false,
  className: null,
}

export default ButtonCard
