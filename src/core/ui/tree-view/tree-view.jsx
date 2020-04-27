import React from 'react'
import PropTypes from 'prop-types'

import TableTree, { Headers, Header, Rows, Row, Cell} from '@atlaskit/table-tree'
import DropList from '@atlaskit/droplist'
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical'

import './tree-view.scss'

function StateFullDropList({ children }) {
  const [open, setOpen] = React.useState(false)

  function onClickHandle() {
    console.log('clicked', open)
    setOpen(!open)
  }

  return (
    <div className="tree-view-more-menu">
      <DropList
        appearance="default"
        position="right"
        isTriggerNotTabbable
        onClick={onClickHandle}
        onOpenChange={() => setOpen(false)}
        isOpen={open}
        trigger={
          <div className="tree-view-menu-button">
            <MoreVerticalIcon size="small" />
          </div>
        }
      >
        {children}
      </DropList>
    </div>
  )
}

function TreeView({ data }) {
  return (
    <TableTree>
      <Headers>
        <Header>{data.title}</Header>
      </Headers>
      <Rows
        items={data.items}
        render={(item) => {
          const displayable = Object.keys(item).filter((key) => (key !== 'items' && key !== 'actions'))
          const displayActions = !!item.actions

          return displayable && (
            <Row
              hasChildren={item.items && item.items.length > 0}
              items={item.items}
            >
              {displayable.map((filteredItem, key) => (
                <Cell key={key}>{item[filteredItem]}</Cell>
              ))}
              <Cell>
                {displayActions && (
                  <StateFullDropList>
                    <ul>
                      <li>Item One</li>
                      <li>Item Two</li>
                    </ul>
                  </StateFullDropList>
                )}
              </Cell>
            </Row>
          )
        }}
      />
    </TableTree>
  )
}

TreeView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  })
}

export default TreeView
