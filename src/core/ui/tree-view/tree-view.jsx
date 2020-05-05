import React from 'react'
import PropTypes from 'prop-types'

import './tree-view.scss'

function TreeView({ data, onActions }) {
  return (
    <p>new Tree view</p>
  )
}

TreeView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  onActions: PropTypes.func,
}

TreeView.defaultProps = {
  onActions: () => {}
}

export default TreeView
