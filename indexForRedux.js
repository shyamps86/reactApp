import React from 'react'
import App from './App'

import store from './Store'
import { Provider } from 'react-redux'



const indexForRedux = () => {
  return (
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
  )
}

export default indexForRedux