import React from 'react'

import TreeView from '.'

export default {
  title: 'Tree View',
  component: TreeView,
}

export const SimpleTreeView = () => {
  return (
    <div style={{ margin: 10 }}>
      <TreeView
        data={{
          title: 'Tree view sample',
          items: [
            {
              title: 'test',
              bla: 'hello',
              actions: [
                {
                  type: 'create',
                }
              ],
              items: [
                {
                  title: 'SubTest',
                  bla: 'SubHello',
                },
              ],
            },
            {
              title: 'test 2',
              bla: 'hello 2',
              items: [],
            },
          ]
        }}
      />
    </div>
  )
}
