
import React, {createContext, useReducer} from 'react'

export const Context = createContext();

export default function Provider(props){
  const {state: initialState, reducer} = props
  const [state, originDispatch] = useReducer(reducer, initialState);
  const dispatch = action => {
    if(typeof action === 'function'){
      return action(originDispatch)
    }
    return originDispatch(action)
  }
  
  return (
      <Context.Provider value={{
        $state: state,
        dispatch
      }}>
        {props.children}
      </Context.Provider>
    );
}