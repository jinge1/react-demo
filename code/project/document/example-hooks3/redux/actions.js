import {
  SET_LOADING,
  SET_TIP
} from './actionTypes'

export function setLoading(status = true){
  return {
    type: SET_LOADING,
    status
  }
} 

export function setTip(msg = '', callback){
  return dispatch =>{
    dispatch({
      type: SET_TIP,
      msg
    })
    setTimeout(()=>{
      if(typeof callback === 'function'){
        callback()
      }
      dispatch({
        type: SET_TIP,
        msg: ''
      })
    }, 2000)  
  }
} 
