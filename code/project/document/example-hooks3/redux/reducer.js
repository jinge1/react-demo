import {
  SET_LOADING,
  SET_TIP
} from './actionTypes'

export default function reducer(state, {type, ...info}) {
  // 根据不同的action type进行state的更新
  switch (type) {
    case SET_LOADING:
      let {loadingNum} = state
      let {status = true} = info
      loadingNum = status ? loadingNum + 1 : Math.max(loadingNum - 1, 0)
      return Object.assign({}, state, {
        loadingNum
      })
    case SET_TIP:
      let {msg} = info
      return Object.assign({}, state, {
        tipMsg: msg
      })
    default:
      return state
  }
}