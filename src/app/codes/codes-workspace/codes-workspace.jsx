import React from 'react'
import PropTypes from 'prop-types'
import MonacoEditor from 'react-monaco-editor'

import { CastaneaContainer, CastaneaHeader } from '../../../core/components/castanea'

import CastaneaMenu from '../../castanea.menu'
import { Button, Tooltip, TreeView } from "../../../core/ui";
import { Save as SaveIcon } from '../../../core/icons'

import './codes-workspace.scss'
import { CODES_HOME, HOME_ROUTE } from "../../castanea.routes";
import TabsClosable, { TabsClosablePanel } from "../../../core/ui/tabs-closable";

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

function CodesWorkspace({
  codesProject,
  selectedCodeIndex,
  onCodeChanged,
  openedFiles,
  onSaveFile,
  onActions,
}) {
  const [tabs, setTabs] = React.useState([])
  const [currentEditor, setCurrentEditor] = React.useState(null)

  React.useEffect(() => {
    const mappedFiles = openedFiles.map(mapOpenedFileToTab)
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
    addSaveActionToEditor(editor, monaco)
    addCloseTabActionToEditor(editor, monaco)
  }

  function addSaveActionToEditor(editor, monaco) {
    editor.addAction({
      id: 'save-action',
      label: 'Save',
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
      ],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: (editor) => onSaveFile(editor.getValue()),
    })
  }

  function addCloseTabActionToEditor(editor, monaco) {
    editor.addAction({
      id: 'close-tab',
      label: 'Close',
      keybindings: [
        monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_W,
      ],
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: (editor) => {
        onActions('tabs:selected', { payload: { index: selectedCodeIndex === 0 ? 0 : selectedCodeIndex - 1 } })
        onActions('tabs:closeFile', { payload: { index: selectedCodeIndex } })
      },
    })
  }

  function handleEditorChange(value) {
    onCodeChanged(value, selectedCodeIndex)
  }

  function mapOpenedFileToTab(item, key) {
    return {
      id: item.id,
      label: item.module,
    }
  }

  return (
    <CastaneaContainer className="codes-workspace-main" menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{codesProject.name}</CastaneaHeader>
      <nav className="codes-workspace-nav">
        <ul>
          <Tooltip text="Save file">
            <li>
              <span>
                <Button className="codes-workspace-actions-btn" onClick={() => onSaveFile()}>
                  <SaveIcon size={18} />
                </Button>
              </span>
            </li>
          </Tooltip>
        </ul>
      </nav>
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
          {openedFiles && (
            openedFiles.map(
              (file, index) => (
                <TabsClosablePanel
                  className="codes-workspace-panel codes-workspace-code-area-content"
                  key={index}
                  index={selectedCodeIndex}
                  value={index}
                >
                  <MonacoEditor
                    value={String(file.content)}
                    language={file.language}
                    editorDidMount={editorMounted}
                    onChange={handleEditorChange}
                    options={{
                      minimap: { enabled: false },
                      wordWrap: 'on',
                      automaticLayout: true,
                      scrollBeyondLastLine: false,
                    }}
                    width="100%"
                    height="100%"
                  />
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
  onActions: PropTypes.func,
  onCodeChanged: PropTypes.func,
  openedFiles: PropTypes.arrayOf(PropTypes.object),
  codesProjects: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

CodesWorkspace.defaultProps = {
  openedFiles: [],
  codesProjects: {},
  onActions: () => {},
  onCodeChanged: () => {},
}

export default CodesWorkspace
