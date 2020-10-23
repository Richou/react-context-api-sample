import React from 'react'
import { compose } from "recompose";
import { useCodesContext } from "..";
import { withCodesDependenciesInjection } from "../context/codes.di";
import CodesWorkspace from "./codes-workspace";
import { SimpleDialog } from "../../../core/ui";
import NewFileForm from "./new-file-form";
import CodesTypes from "../context/codes.types";

function CodesWorkspaceWrapper({ match, projectService }) {
  const [codesContext, dispatch] = useCodesContext()
  const [working, setWorking] = React.useState(true)
  const [openNewFileModal, setOpenNewFileModal] = React.useState(false)
  const [newItemContext, setNewItemContext] = React.useState(null)
  const { codesOpenedFiles } = codesContext

  React.useEffect(() => {
    fetchProjectById(match.params.id).then(() => setWorking(false))

    return () => {
      dispatch({ type: CodesTypes.CLEAR_CODES_OPENED_FILES })
      dispatch({ type: CodesTypes.SET_CODES_WORKSPACE, payload: [] })
    }
  }, [])

  React.useEffect(() => {
    if (codesOpenedFiles?.length === 0) {
      dispatch({ type: CodesTypes.SET_CODES_SELECTED_FILES, payload: { index: null } })
    }
  }, [codesOpenedFiles])

  function handleNewFileClose() {
    setOpenNewFileModal(false)
  }

  async function onCreateNewFileHandler(inputs) {
    const createdItem = await projectService.newItem(match.params.id, { ...inputs, ...newItemContext})

    await fetchProjectById(match.params.id)
    if (createdItem.mimeType !== 'directory') {
      dispatch({
        type: CodesTypes.ADD_CODES_OPENED_FILES,
        payload: { ...createdItem, module: createdItem.name },
      })
      dispatch({
        type: CodesTypes.SET_CODES_SELECTED_FILES,
        payload: { index: codesContext.codesOpenedFiles.length },
      })
    }
    setOpenNewFileModal(false)
  }

  async function fetchProjectById(id) {
    const project = await projectService.getProject(id)
    const mapped = projectService.mapProject(project)

    if (!mapped.error) {
      dispatch({
        type: CodesTypes.SET_CODES_WORKSPACE,
        payload: mapped,
      })
    }
    return mapped
  }

  async function onActionsHandler(type, { option, payload }) {
    if (type === 'treeView:openFile') {
      dispatch({
        type: CodesTypes.ADD_CODES_OPENED_FILES,
        payload,
      })
      const openedFile = codesContext.codesOpenedFiles.map((item) => item.id)
      if (openedFile.length === 0) {
        dispatch({
          type: CodesTypes.SET_CODES_SELECTED_FILES,
          payload: { index: 0 },
        })
      } else {
        const indexOfOpenedFile = openedFile.indexOf(payload.id)
        if (indexOfOpenedFile > -1) {
          dispatch({
            type: CodesTypes.SET_CODES_SELECTED_FILES,
            payload: { index: indexOfOpenedFile },
          })
        } else {
          dispatch({
            type: CodesTypes.SET_CODES_SELECTED_FILES,
            payload: { index: openedFile.length },
          })
        }
      }
    }

    if (type === 'tabs:closeFile') {
      const { index } = payload
      dispatch({
        type: CodesTypes.CLOSE_CODES_OPENED_FILES,
        payload: { index },
      })
    }

    if (type === 'tabs:selected') {
      const { index } = payload
      dispatch({
        type: CodesTypes.SET_CODES_SELECTED_FILES,
        payload: { index },
      })
    }

    if (type === 'treeView:moreMenuClicked') {
      if (option === 'New file' || option === 'New directory') {
        const { id, module } = payload
        const { name: projectName } = codesContext.codesWorkspace

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
    dispatch({
      type: CodesTypes.SET_CODE_CONTENT,
      payload: { index, value }
    })
  }

  async function onSaveFileHandler(newValue) {
    if (codesContext.codesSelectedFiles !== null) {
      const { codesSelectedFiles, codesOpenedFiles } = codesContext

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
        selectedCodeIndex={codesContext.codesSelectedFiles}
        codesProject={codesContext.codesWorkspace}
        openedFiles={codesContext.codesOpenedFiles}
      />
      <SimpleDialog open={openNewFileModal} title={`New ${newItemContext?.type}`} onClose={handleNewFileClose}>
        <NewFileForm onSubmit={onCreateNewFileHandler} onCancel={handleNewFileClose} />
      </SimpleDialog>
    </>
  )
}

export default compose(
  withCodesDependenciesInjection,
)(CodesWorkspaceWrapper)
