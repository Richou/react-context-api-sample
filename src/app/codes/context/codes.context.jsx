import React from 'react'
import codesReducer from './codes.reducer'

const initialState = {
  codesProjects: [],
  codesWorkspace: {},
  codesOpenedFiles: [],
  codesSelectedFiles: null,
};

const CodesStateContext = React.createContext(null);
const CodesDispatchContext = React.createContext(null);

export const CodesProvider = props => {
  const [state, dispatch] = React.useReducer(codesReducer, initialState);
  return (
    <CodesStateContext.Provider value={state}>
      <CodesDispatchContext.Provider value={dispatch}>
        {props.children}
      </CodesDispatchContext.Provider>
    </CodesStateContext.Provider>
  )
};

export const useCodesContext = () => {
  const state = React.useContext(CodesStateContext);
  const dispatch = React.useContext(CodesDispatchContext);

  return [state, dispatch]
}
