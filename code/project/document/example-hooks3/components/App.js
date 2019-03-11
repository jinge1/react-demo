import React, {
  useContext,
  useEffect,
  useState
} from 'react'
import {Context} from './Provider'

import {
  Switch,
  Link,
  Route
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Loading from './Loading'
import Tip from './Tip'
import {setLoading, setTip} from '../redux/actions'


function App(props){
  const store = useContext(Context)
  const {$state, dispatch, $utils, $post} = store
  const [data, setData] = useState({})

  // console.log($utils.isMobile('1588888'))
  // console.log($utils.isMobile('15889999999'))

  // $post('some/api', {body: 'nothing'}).then(res=>{
  //   console.log('res: ', res)
  // })

  // useEffect(()=>{
  //   $post('some/api', {body: 'nothing'}).then(res=>{
  //     console.log('res: ', res)
  //   })
  // }, [])

  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Loading num={$state.loadingNum}></Loading>
      <Tip msg={$state.tipMsg}></Tip>
      <div>
        <button onClick={()=> dispatch(setLoading(true))}>loading</button>
        <button onClick={()=> dispatch(setTip(Date.now(), ()=>{
          console.log('ok???')
        }))}>tip</button>
      </div>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  )
}

// export default connect(state=> {return {number: state.number}})(App)

export default App