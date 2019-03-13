import {
  SET_LOADING,
  SET_TIP
} from 'comm/store/actionTypes'

export default function reducer(state, {type, ...info}) {
  // 根据不同的action type进行state的更新
  switch (type) {
    case SET_LOADING:
      let {loadingNum} = state
      let {status = true} = info
      loadingNum = status ? loadingNum + 1 : loadingNum - 1
      return Object.assign({}, state, {
        loadingNum: loadingNum < 0 ? 0 : loadingNum
      })
    case SET_TIP:
      let {msg} = info
      return Object.assign({}, state, {
        tipText: msg
      })
    default:
      return state
  }
}