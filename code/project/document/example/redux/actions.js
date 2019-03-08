import {
  INCREASE,
  DECREASE,
  GETSUCCESS,
  REFRESHDATA
} from './actionTypes'

// 这里的方法返回一个action对象
export const increase = n => {
  return {
    type: INCREASE,
    amount: n
  }
}

export const decrease = n => {
  return {
    type: DECREASE,
    amount: n
  }
}

export const refreshData = () => {
  return {
    type: REFRESHDATA
  }
}

export const getSuccess = (json) => {
  return {
    type: GETSUCCESS,
    json
  }
}

export function fetchPosts(...other) {
  console.log(other)
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      // dispatch(getSuccess(data))
      dispatch(increase(2))
      resolve()
    }, 2000)
  })
}

// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded(...o) {
  console.log(o)

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么
  // return (dispatch, getState) => {
  //   alert(dispatch)
  //   return dispatch(fetchPosts())
  // }
}