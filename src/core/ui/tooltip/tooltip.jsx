import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip as MuiToolTip } from '@material-ui/core'

function Tooltip({ text, position, children }) {
  return (
    <MuiToolTip title={text} placement={position} arrow>
      {children}
    </MuiToolTip>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string,
}

Tooltip.defaultProps = {
  position: 'top',
}

export default Tooltip
