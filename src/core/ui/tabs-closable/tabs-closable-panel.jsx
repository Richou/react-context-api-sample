import React from 'react'
import PropTypes from 'prop-types'

import './tabs-closable-panel.scss'

function TabsClosablePanel({ value, className, index, children }) {
  if (value !== index) return null

  return (
    <div className={className}>
      {children}
    </div>
  )
}

TabsClosablePanel.propTypes = {
  value: PropTypes.number,
  index: PropTypes.number,
  className: PropTypes.string,
}

export default TabsClosablePanel
