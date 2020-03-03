import React from 'react'

import TabsClosable from '.'

export default {
  title: 'TabsClosable',
  component: TabsClosable
}

export const SimpleTabs = () => {
  const tabs = [
    {
      id: 'one',
      label: 'Tab one',
      content: <p>Hello Tab One !</p>,
    },
    {
      id: 'two',
      label: 'Tab two',
      content: <p>Hello Tab Two !</p>,
    },
    {
      id: 'three',
      label: 'Tab Three',
      content: <p>Hello Tab Three !</p>,
    },
  ]
  const newTab = {
    id: new Date().toISOString(),
    label: 'New tab',
    content: <p>Hello new Tab !</p>,
  }

  const [activeTabs, setActiveTabs] = React.useState(tabs)

  function onItemCloseHandler(id) {
    const newActiveTabs = activeTabs.filter((item) => item.id !== id)
    setActiveTabs(newActiveTabs)
  }

  function onItemAddHandler() {
    setActiveTabs([...activeTabs, newTab])
  }

  return <TabsClosable tabs={activeTabs} onItemClose={onItemCloseHandler} onAddItem={onItemAddHandler} />
}
