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

  function dispatchCloseFile(id) {
    dispatch({
      type: CodesTypes.CLOSE_CODES_OPENED_FILES,
      payload: { id },
    })
  }

  return Object.freeze({
    context,
    dispatchProjects,
    dispatchCodesWorkspace,
    dispatchOpenFile,
    dispatchCloseFile,
  })
}
