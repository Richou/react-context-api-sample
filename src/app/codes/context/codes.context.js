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

  return Object.freeze({
    context,
    dispatchProjects,
    dispatchCodesWorkspace,
  })
}
