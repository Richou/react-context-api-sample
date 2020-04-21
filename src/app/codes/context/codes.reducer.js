import CodesTypes from './codes.types'

const codesReducer = (state, action) => {
  switch(action.type) {
    case CodesTypes.SET_CODES_PROJECTS:
      return {
        ...state,
        codesProjects: action.payload,
      }
    default:
      return { ...state }
  }
}

export default codesReducer
