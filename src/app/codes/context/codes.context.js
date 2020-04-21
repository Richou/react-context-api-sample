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

  return Object.freeze({
    context,
    dispatchProjects,
  })
}
