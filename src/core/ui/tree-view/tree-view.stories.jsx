import React from 'react'

import TreeView from '.'

export default {
  title: 'Tree View',
  component: TreeView,
}

export const SimpleTreeView = () => {
  function onActions(type, param) {
    console.log(type, param)
  }

  return (
    <div style={{ margin: 10 }}>
      <TreeView
        onActions={onActions}
        data={{
          title: 'Tree view sample',
          items: [
            {
              title: 'test',
              actions: [
                {
                  type: 'create',
                  label: 'Create Directory'
                },
              ],
              items: [
                {
                  title: 'SubTest',
                  actions: [
                    {
                      type: 'create',
                      label: 'Create Directory',
                    },
                    {
                      type: 'view',
                      label: 'View details',
                    },
                  ],
                  items: [
                    {
                      title: 'SubTest',
                    },
                  ],
                },
              ],
            },
            {
              title: 'test 2',
              items: [],
            },
          ]
        }}
      />
    </div>
  )
}
