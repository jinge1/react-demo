
import React, {useReducer} from 'react'

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

export const context = React.createContext();
console.log(context)

export default function Provider(props){
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
        <context.Provider value={{ state, dispatch }}>
            {props.children}
        </context.Provider>
    );
}