import React from 'react'
import { compose } from "recompose";
import { withCodesContext } from "..";
import { withCodesDependenciesInjection } from "../context/codes.di";
import CodesWorkspace from "./codes-workspace";

function CodesWorkspaceWrapper({ match, codesContextHelper, projectService }) {
  const [working, setWorking] = React.useState(true)
  const { codesOpenedFiles } = codesContextHelper.context()

  React.useEffect(() => {
    fetchProjectById(match.params.id).then(() => setWorking(false))

    return () => {
      codesContextHelper.dispatchClearCodesWorkspace()
    }
  }, [])

  React.useEffect(() => {
    if (codesOpenedFiles?.length === 0) {
      codesContextHelper.dispatchSelectedFile(null)
    }
  }, [codesOpenedFiles])

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

  async function onSaveFileHandler(newValue) {
    if (codesContextHelper.context().codesSelectedFiles !== null) {
      const { codesSelectedFiles, codesOpenedFiles } = codesContextHelper.context()

      const toSaveFile = codesOpenedFiles[codesSelectedFiles]

      // Must do a trick like that, don't know why but, when method is trigger by shortcut, the value is not up-to-date.
      const weirdStuff = newValue ? { ...toSaveFile, content: newValue } : toSaveFile

      await projectService.saveFile(match.params.id, weirdStuff)
    }
  }

  return (
    <CodesWorkspace
      onActions={onActionsHandler}
      onCodeChanged={onCodeChangedHandler}
      working={working}
      onSaveFile={onSaveFileHandler}
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
