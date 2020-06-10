import React from 'react'

import TreeView from '.'

export default {
  title: 'Tree View',
  component: TreeView,
}

const tree = {
  module: 'react-ui-tree',
  id: '01',
  children: [{
    module: 'dist',
    id: '02',
    children: [{
      module: 'node.js',
      id: '03',
    }]
  }]
}

export const SimpleTreeView = () => {
  function onActions(type, param) {
    console.log(type, param)
  }

  return (
    <div style={{ margin: 10, width: '200px' }}>
      <TreeView
        onActions={onActions}
        data={tree}
        identSize={20}
      />
    </div>
  )
}
