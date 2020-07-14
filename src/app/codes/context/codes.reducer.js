import CodesTypes from './codes.types'

const codesReducer = (state, action) => {
  switch(action.type) {
    case CodesTypes.SET_CODES_PROJECTS:
      return {
        ...state,
        codesProjects: action.payload,
      }
    case CodesTypes.SET_CODES_WORKSPACE:
      return {
        ...state,
        codesWorkspace: action.payload,
      }
    case CodesTypes.ADD_CODES_OPENED_FILES: {
      const openedIds = state.codesOpenedFiles.map((item) => item.id)
      if (openedIds.includes(action.payload.id)) {
        return { ...state }
      }

      return {
        ...state,
        codesOpenedFiles: [...state.codesOpenedFiles, action.payload],
      }
    }
    case CodesTypes.CLOSE_CODES_OPENED_FILES: {
      const idToClose = action.payload.id

      console.log('close', idToClose)

      const filtered = state.codesOpenedFiles.filter((item) => item.id !== idToClose)

      return {
        ...state,
        codesOpenedFiles: filtered,
      }
    }
    default:
      return { ...state }
  }
}

export default codesReducer
