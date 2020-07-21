import React from 'react'
import { compose } from "recompose";
import { withCodesContext } from "..";
import { withCodesDependenciesInjection } from "../context/codes.di";
import CodesWorkspace from "./codes-workspace";

function CodesWorkspaceWrapper({ match, codesContextHelper, projectService }) {
  const [working, setWorking] = React.useState(true)

  React.useEffect(() => {
    fetchProjectById(match.params.id).then(() => setWorking(false))

    return () => {
      codesContextHelper.dispatchClearCodesWorkspace()
    }
  }, [])

  async function fetchProjectById(id) {
    const project = await projectService.getProject(id)
    const mapped = projectService.mapProject(project)

    if (!mapped.error) {
      codesContextHelper.dispatchCodesWorkspace(mapped)
    }
    return mapped
  }

  async function onActionsHandler(type, { payload }) {
    if (type === 'treeView:openFile') {
      codesContextHelper.dispatchOpenFile(payload)
      const openedFile = codesContextHelper.context().codesOpenedFiles.map((item) => item.id)
      if (openedFile.length === 0) {
        codesContextHelper.dispatchSelectedFile(0)
      } else {
        const indexOfOpenedFile = openedFile.indexOf(payload.id)
        if (indexOfOpenedFile > -1) {
          codesContextHelper.dispatchSelectedFile(indexOfOpenedFile)
        } else {
          codesContextHelper.dispatchSelectedFile(openedFile.length)
        }
      }
    }

    if (type === 'tabs:closeFile') {
      const { index } = payload
      codesContextHelper.dispatchCloseFile(index)
    }

    if (type === 'tabs:selected') {
      const { index } = payload
      codesContextHelper.dispatchSelectedFile(index)
    }
  }

  function onCodeChangedHandler(value, index) {
    codesContextHelper.dispatchCodeContent(value, index)
  }

  return (
    <CodesWorkspace
      onActions={onActionsHandler}
      onCodeChanged={onCodeChangedHandler}
      working={working}
      selectedCodeIndex={codesContextHelper.context().codesSelectedFiles}
      codesProject={codesContextHelper.context().codesWorkspace}
      openedFiles={codesContextHelper.context().codesOpenedFiles}
    />
  )
}

export default compose(
  withCodesContext,
  withCodesDependenciesInjection,
)(CodesWorkspaceWrapper)
