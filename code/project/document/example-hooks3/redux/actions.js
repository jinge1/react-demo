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

export function setTip(msg = ''){
  return {
    type: SET_TIP,
    msg
  }
} 
