import CodesTypes from './codes.types'
import * as table from '../../../core/common/utils/table'

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
      const idxToClose = action.payload.index
      const filtered = state.codesOpenedFiles.filter((item, index) => index !== idxToClose)

      return {
        ...state,
        codesOpenedFiles: filtered,
      }
    }
    case CodesTypes.CLEAR_CODES_OPENED_FILES: {
      return {
        ...state,
        codesOpenedFiles: [],
      }
    }
    case CodesTypes.SET_CODES_SELECTED_FILES: {
      return {
        ...state,
        codesSelectedFiles: action.payload.index,
      }
    }
    case CodesTypes.SET_CODE_CONTENT: {
      const { index, value } = action.payload
      const { codesOpenedFiles } = state

      const itemToReplace = codesOpenedFiles[index]
      const newItem = {
        ...itemToReplace,
        content: value,
      }
      const newOpenedFiles = table.replace(codesOpenedFiles, newItem, index)

      return {
        ...state,
        codesOpenedFiles: newOpenedFiles,
      }
    }
    default:
      return { ...state }
  }
}

export default codesReducer
