import React from 'react'
import PropTypes from 'prop-types'
import Tree from 'react-ui-tree'
import Icon from 'react-icons-kit'
import { folder } from 'react-icons-kit/icomoon/folder'
import { folderOpen } from 'react-icons-kit/icomoon/folderOpen'
import { fileEmpty } from 'react-icons-kit/icomoon/fileEmpty'

import 'react-ui-tree/dist/react-ui-tree.css'
import './tree-view.scss'
import { MoreMenu } from '..'

function TreeView({ data, onActions, identSize }) {
  const [tree, setTree] = React.useState(null)

  React.useEffect(() => {
    setTree(data)
  }, [data])

  function buildMoreIconOptions(node) {
    const isFolder = node.type === 'directory'

    if (isFolder) {
      return ['New file', 'New directory', 'Rename', 'Delete']
    }

    return ['Rename', 'Delete']
  }

  function renderNode(node) {
    const isFolder = node.type === 'directory'
    return (
      <span onClick={() => onClickHandler(node)}>
        <div className="tree-view-tool-bar">
          <span className="tree-view-name">
            <Icon icon={isFolder ? node.collapsed ? folder : folderOpen : fileEmpty} />
            {node.module}
          </span>
          <div className="tree-view-tool-bar-folder">
            <MoreMenu
              onClick={(option) => onActions('treeView:moreMenuClicked', { option, payload: node })}
              options={buildMoreIconOptions(node)}
            />
          </div>
        </div>
      </span>
    )
  }

  function onClickHandler(node) {
    const isFolder = node.type === 'directory'
    if (!isFolder) {
      onActions('treeView:openFile', { payload: node })
    }
  }

  function onChangeHandler(tree) {
    setTree(tree)
  }

  return (
    <div className="tree-view-container">
      {!tree && <span>Loading ...</span>}
      {tree && (<Tree
        paddingLeft={identSize}
        tree={tree}
        renderNode={(node) => renderNode(node)}
        onChange={onChangeHandler}
      />)}
    </div>
  )
}

TreeView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }),
  onActions: PropTypes.func,
  identSize: PropTypes.number,
}

TreeView.defaultProps = {
  data: null,
  onActions: () => {},
  identSize: 10,
}

export default TreeView
