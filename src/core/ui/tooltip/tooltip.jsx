import React from 'react'
import PropTypes from 'prop-types'

function Tooltip({ content, children }) {
  return (
    <div className="castanea-tooltip">
      <span></span>
    </div>
  )
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired
}

export default Tooltip
