import React from 'react'
import PropTypes from 'prop-types'

import { CastaneaContainer, CastaneaHeader } from '../../../core/components/castanea'

import CastaneaMenu from '../../castanea.menu'
import { CodeEditor, TreeView } from "../../../core/ui";

import './codes-workspace.scss'
import { CODES_HOME, HOME_ROUTE } from "../../castanea.routes";
import TabsClosable from "../../../core/ui/tabs-closable";

const breadcrumb = [
  {
    to: HOME_ROUTE.url,
    label: HOME_ROUTE.label,
  },
  {
    to: CODES_HOME.url,
    label: CODES_HOME.label,
  },
]
function CodesWorkspace({ codesProject, working, openedFiles, onActions }) {
  const [tabs, setTabs] = React.useState([])

  React.useEffect(() => {
    const mappedFiles = openedFiles.map(renderTab)
    setTabs(mappedFiles)
  }, [openedFiles])

  function renderTab(item, key) {
    return {
      id: item.id,
      label: item.module,
      content:
        <div key={key} style={{ position: 'relative', }}>
          <CodeEditor autocomplete value={item.content} />
        </div>,
    }
  }

  return (
    <CastaneaContainer className="codes-workspace-main" menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{codesProject.name}</CastaneaHeader>
      <div className="codes-workspace-container">
        <div className="codes-workspace-files">
          <TreeView data={codesProject.tree} onActions={onActions} />
        </div>
        <div className="codes-workspace-code-area">
          {tabs &&
            (<TabsClosable
              className="codes-workspace-tabs"
              allowAdd={false}
              onItemClose={(id) => onActions('tabs:closeFile', { payload: { id } })}
              tabs={tabs}
            />
          )}
        </div>
      </div>
    </CastaneaContainer>
  )
}

CodesWorkspace.propTypes = {
  working: PropTypes.bool,
  onActions: PropTypes.func,
  openedFiles: PropTypes.arrayOf(PropTypes.object),
  codesProjects: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

CodesWorkspace.defaultProps = {
  working: false,
  openedFiles: [],
  codesProjects: {},
  onActions: () => {},
}

export default CodesWorkspace
