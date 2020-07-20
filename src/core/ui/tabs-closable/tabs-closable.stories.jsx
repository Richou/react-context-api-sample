import React from 'react'

import TabsClosable from '.'
import { boolean } from "@storybook/addon-knobs";

export default {
  title: 'TabsClosable',
  component: TabsClosable
}

export const SimpleTabs = () => {
  const groupId = 'TABS-CLOSABLE-01'

  const tabs = [
    {
      id: 'one',
      label: 'Tab one',
      content: <p style={{ backgroundColor: 'red', }}>Hello Tab One !</p>,
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
    const newActiveTabs = activeTabs.filter((item, index) => index !== id)
    setActiveTabs(newActiveTabs)
  }

  function onItemAddHandler() {
    setActiveTabs([...activeTabs, newTab])
  }

  return <TabsClosable
    tabs={activeTabs}
    disabled={boolean("Disabled", false, groupId)}
    onItemClose={onItemCloseHandler}
    selectedIndex={1}
    onAddItem={onItemAddHandler}
  />
}
