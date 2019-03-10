import React from 'react'

// let {
//   Consumer
// } = React.createContext()


import {
  Consumer
} from './Provider'

export default function Home(props){
  return (
    <Consumer>
      {value => <div>
                value: {value}
            </div>}
    </Consumer>
  )
}