import React from 'react'
import PropTypes from 'prop-types'

import { CastaneaContainer, CastaneaHeader } from '../../../core/components/castanea'

import CastaneaMenu from '../../castanea.menu'
import { CodeEditor, TreeView } from "../../../core/ui";

import './codes-workspace.scss'
import { CODES_HOME, HOME_ROUTE } from "../../castanea.routes";
import TabsClosable, { TabsClosablePanel } from "../../../core/ui/tabs-closable";

import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import MonacoEditor from "react-monaco-editor";

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
function CodesWorkspace({ codesProject, selectedCodeIndex, working, openedFiles, onActions }) {
  const [tabs, setTabs] = React.useState([])
  const [currentEditor, setCurrentEditor] = React.useState(null)

  React.useEffect(() => {
    const mappedFiles = openedFiles.map(renderTab)
    setTabs(mappedFiles)
  }, [openedFiles])

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  function handleWindowResize() {
    if(currentEditor !== null) {
      currentEditor.layout()
    }
  }

  function editorMounted(editor, monaco) {
    setCurrentEditor(editor)
  }

  function renderTab(item, key) {
    return {
      id: item.id,
      label: item.module,
      content: (
        <MonacoEditor
          value={item.content}
          language={item.language}
          editorDidMount={editorMounted}
          options={{
            minimap: { enabled: false },
            wordWrap: 'on',
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
          width="100%"
          height="100%"
        />
      ),
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
              selectedIndex={selectedCodeIndex}
              onItemSelected={(index) => onActions('tabs:selected', { payload: { index } })}
              onItemClose={(index) => onActions('tabs:closeFile', { payload: { index } })}
              tabs={tabs}
            />
          )}
          {tabs && (
            tabs.map(
              (tab, index) => (
                <TabsClosablePanel
                  className="codes-workspace-panel codes-workspace-code-area-content"
                  key={index}
                  index={selectedCodeIndex}
                  value={index}
                >
                  {tab.content}
                </TabsClosablePanel>
              )
            )
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
