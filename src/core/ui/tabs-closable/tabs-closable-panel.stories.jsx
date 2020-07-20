import React from 'react'

import TabsClosablePanel from "./tabs-closable-panel";

export default {
  title: 'TabsClosablePanel',
  component: TabsClosablePanel
}

export const SimpleTabsClosablePanel = () => {

  return (
    <TabsClosablePanel
      index={0}
      value={0}
    >
      <p>coucou</p>
    </TabsClosablePanel>
  )
}
