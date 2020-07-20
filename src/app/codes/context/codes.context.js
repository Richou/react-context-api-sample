import CodesTypes from './codes.types'

export default function CodesContextHelper(ctx, dispatch) {
  function context() {
    return ctx
  }

  function dispatchProjects(projects) {
    dispatch({
      type: CodesTypes.SET_CODES_PROJECTS,
      payload: projects,
    })
  }

  function dispatchClearCodesWorkspace() {
    dispatchCodesWorkspace({})
    dispatchClearOpenedFiles()
  }

  function dispatchCodesWorkspace(project) {
    dispatch({
      type: CodesTypes.SET_CODES_WORKSPACE,
      payload: project,
    })
  }

  function dispatchOpenFile(file) {
    dispatch({
      type: CodesTypes.ADD_CODES_OPENED_FILES,
      payload: file,
    })
  }

  function dispatchCloseFile(index) {
    dispatch({
      type: CodesTypes.CLOSE_CODES_OPENED_FILES,
      payload: { index },
    })
  }

  function dispatchSelectedFile(index) {
    dispatch({
      type: CodesTypes.SET_CODES_SELECTED_FILES,
      payload: { index },
    })
  }

  function dispatchClearOpenedFiles() {
    dispatch({
      type: CodesTypes.CLEAR_CODES_OPENED_FILES,
    })
  }

  return Object.freeze({
    context,
    dispatchProjects,
    dispatchCodesWorkspace,
    dispatchOpenFile,
    dispatchCloseFile,
    dispatchClearCodesWorkspace,
    dispatchSelectedFile,
  })
}
