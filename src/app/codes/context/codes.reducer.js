import * as table from '../../../core/common/utils/table'

const codesReducer = (state, action) => {
  switch(action.type) {
    case 'codeProjects:set':
      return {
        ...state,
        codesProjects: action.payload,
      }
    case 'codeWorkspace:set':
      return {
        ...state,
        codesWorkspace: action.payload,
      }
    case 'codeOpenedFiles:add': {
      const openedIds = state.codesOpenedFiles.map((item) => item.id)
      if (openedIds.includes(action.payload.id)) {
        return { ...state }
      }

      return {
        ...state,
        codesOpenedFiles: [...state.codesOpenedFiles, action.payload],
      }
    }
    case 'codeOpenedFiles:close': {
      const idxToClose = action.payload.index
      const filtered = state.codesOpenedFiles.filter((item, index) => index !== idxToClose)

      return {
        ...state,
        codesOpenedFiles: filtered,
      }
    }
    case 'codeOpenedFiles:clear': {
      return {
        ...state,
        codesOpenedFiles: [],
      }
    }
    case 'codeSelectedFiles:set': {
      return {
        ...state,
        codesSelectedFiles: action.payload.index,
      }
    }
    case 'codeContent:set': {
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
