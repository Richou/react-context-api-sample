import React from 'react'
import { compose } from "recompose";
import { withCodesContext } from "..";
import { withCodesDependenciesInjection } from "../context/codes.di";
import CodesWorkspace from "./codes-workspace";
import { SimpleDialog } from "../../../core/ui";
import NewFileForm from "./new-file-form";

function CodesWorkspaceWrapper({ match, codesContextHelper, projectService }) {
  const [working, setWorking] = React.useState(true)
  const [openNewFileModal, setOpenNewFileModal] = React.useState(false)
  const [newItemContext, setNewItemContext] = React.useState(null)
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

  function handleNewFileClose() {
    setOpenNewFileModal(false)
  }

  async function onCreateNewFileHandler(inputs) {
    const createdItem = await projectService.newItem(match.params.id, { ...inputs, ...newItemContext})

    await fetchProjectById(match.params.id)
    if (createdItem.mimeType !== 'directory') {
      codesContextHelper.dispatchOpenFile({ ...createdItem, module: createdItem.name })
      codesContextHelper.dispatchSelectedFile(codesContextHelper.context().codesOpenedFiles.length)
    }
    setOpenNewFileModal(false)
  }

  async function fetchProjectById(id) {
    const project = await projectService.getProject(id)
    const mapped = projectService.mapProject(project)

    if (!mapped.error) {
      codesContextHelper.dispatchCodesWorkspace(mapped)
    }
    return mapped
  }

  async function onActionsHandler(type, { option, payload }) {
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

    if (type === 'treeView:moreMenuClicked') {
      if (option === 'New file' || option === 'New directory') {
        const { id, module } = payload
        const { name: projectName } = codesContextHelper.context().codesWorkspace

        const parent = (module === projectName) ? {} : { parent: id }

        setNewItemContext({
          type: (option === 'New file') ? 'file' : 'directory',
          ...parent,
        })
        setOpenNewFileModal(true)
      }
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

      await fetchProjectById(match.params.id)
    }
  }

  return (
    <>
      <CodesWorkspace
        onActions={onActionsHandler}
        onCodeChanged={onCodeChangedHandler}
        working={working}
        onSaveFile={onSaveFileHandler}
        selectedCodeIndex={codesContextHelper.context().codesSelectedFiles}
        codesProject={codesContextHelper.context().codesWorkspace}
        openedFiles={codesContextHelper.context().codesOpenedFiles}
      />
      <SimpleDialog open={openNewFileModal} title={`New ${newItemContext?.type}`} onClose={handleNewFileClose}>
        <NewFileForm onSubmit={onCreateNewFileHandler} onCancel={handleNewFileClose} />
      </SimpleDialog>
    </>
  )
}

export default compose(
  withCodesContext,
  withCodesDependenciesInjection,
)(CodesWorkspaceWrapper)
