import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import './button-card.scss'

function ButtonCard({ onClick, disabled, children }) {
  return (
    <div
      className={clsx('button-card', disabled && 'disabled')}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

ButtonCard.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

ButtonCard.defaultProps = {
  children: null,
  disabled: false,
}

export default ButtonCard
