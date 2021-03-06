
import React, {createContext, useReducer, useEffect} from 'react'
// import {setLoading, setTip} from 'comm/store/actions'

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
        dispatch,
        // $utils: {},
        // $post(api, options){
        //   return new Promise((resolve, reject)=>{
        //     dispatch(setLoading(true))
        //     setTimeout(()=>{
        //       dispatch(setLoading(false))
        //       const isEven = Math.floor(Math.random() * 10) % 2
        //       if(isEven){
        //         resolve('yes')
        //       }else{
        //         const msg = 'no'
        //         dispatch(setTip(msg))
        //         reject(msg)
        //       }
        //     }, 2000)
        //   })
        // },
        // $methods: {}
      }}>
        {props.children}
      </Context.Provider>
    );
}