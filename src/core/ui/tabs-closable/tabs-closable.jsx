import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from '@material-ui/core'
import { Close as CloseIcon } from '../../icons'

import './tabs-closable.scss'
import { Button } from "../index";

function TabsClosable({ tabs, selectedIndex, onItemClose, onItemSelected }) {
  function onTabCloseHandler(event, index) {
    event.preventDefault()

    if (selectedIndex >= index && selectedIndex !== 0) {
      onItemSelected(selectedIndex - 1)
    }
    if (selectedIndex === 0) {
      onItemSelected(0)
    }

    onItemClose(index)
  }

  function onTabChangedHandler(event, newValue) {
    if (event.target.tagName !== 'DIV') {
      event.preventDefault()

      return
    }

    onItemSelected(newValue)
  }

  function renderTabLabel(tab, index) {
    return (
      <div className="tabs-item-label">
        <div>{tab.label}</div>
        <Button className="tabs-item-close-btn" onClick={(event) => onTabCloseHandler(event, index)}>
          <CloseIcon size={8} />
        </Button>
      </div>
    )
  }

  function renderTab(tab, index) {
    return (
      <Tab
        component="div"
        disableRipple
        className="tabs-closable-item"
        key={index}
        label={renderTabLabel(tab, index)}
      />
    )
  }

  if(tabs) {
    return (
      <Tabs
        onChange={(event, newValue) => onTabChangedHandler(event, newValue)}
        TabIndicatorProps={{ className: 'tabs-closable-indicator'}}
        value={selectedIndex}
      >
        {tabs.map(renderTab)}
      </Tabs>
    )
  }
}

TabsClosable.propTypes = {
  selectedIndex: PropTypes.number,
  onItemClose: PropTypes.func,
  onItemSelected: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
}

TabsClosable.defaultProps = {
  selectedIndex: 0,
  onItemClose: () => {},
  onItemSelected: () => {},
  tabs: [],
}

export default TabsClosable
