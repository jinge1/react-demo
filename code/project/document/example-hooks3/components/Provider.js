
import React, {createContext, useReducer} from 'react'

export const Context = createContext();

export default function Provider(props){
  const {state: initialState, reducer} = props
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <Context.Provider value={{
        $state: state,
        dispatch
      }}>
        {props.children}
      </Context.Provider>
    );
}