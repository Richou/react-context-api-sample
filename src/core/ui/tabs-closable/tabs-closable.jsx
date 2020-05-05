import React from 'react'
import PropTypes from 'prop-types'
import Tabs, { TabItem } from '@atlaskit/tabs'
import { Add as AddIcon } from '../../icons'
import { Close as CloseIcon } from '../../icons'

import './tabs-closable.scss'

function TabsClosable({ tabs, onItemClose, onAddItem }) {
  const [selected, setSelected] = React.useState(0)
  const [innerTabs, setInnerTabs] = React.useState(tabs)

  function addItemHandler() {
    setSelected(tabs.length)
    onAddItem()
  }

  function closeItemHandler(id) {
    onItemClose(id)
    const closingItemIndex = innerTabs.map((item) => item.id).indexOf(id)
    if (closingItemIndex === selected || selected === tabs.length - 1) {
      setSelected(tabs.length - 2)
    }
  }

  const ClosableItem = (props) => {
    if (props.data.id === 'add') {
      return (
        <div className="tabs-closable-item add-button">
          <div onClick={addItemHandler}><AddIcon size={8} /></div>
        </div>
      )
    }

    return (
      <div className="tabs-closable-item">
        <TabItem {...props} />
        {tabs && tabs.length !== 1 && (<span onClick={() => closeItemHandler(props.data.id)}><CloseIcon size={8} /></span>)}
      </div>
    )
  }

  React.useEffect(() => {
    setInnerTabs([...tabs, { id: 'add' }])
  }, [tabs])

  return (
    <Tabs
      selected={selected}
      onSelect={(item, selectedIndex) => setSelected(selectedIndex)}
      components={{ Item: ClosableItem }}
      tabs={innerTabs}
    />
  )
}

TabsClosable.propTypes = {
  onItemClose: PropTypes.func,
  selected: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    content: PropTypes.shape({}),
  }))
}

TabsClosable.defaultProps = {
  onItemClose: () => {},
  onAddItem: () => {},
  tabs: [],
}

export default TabsClosable
