import React from 'react'
import codesReducer from './codes.reducer'
import CodesContextHelper from './codes.context'

const initialState = {
  codesProjects: [],
  codesWorkspace: {},
};

const CodesContext = React.createContext(null);

export const CodesProvider = props => {
  const [state, dispatch] = React.useReducer(codesReducer, initialState);
  const value = [state, dispatch];
  return <CodesContext.Provider value={value}>{props.children}</CodesContext.Provider>
};

export const withCodesContext = Component => ({ ...props }) => {
  const [state, dispatch] = React.useContext(CodesContext);
  const codesContextHelper = CodesContextHelper(state, dispatch);
  return (<Component {...props} codesContextHelper={codesContextHelper} />)
};
