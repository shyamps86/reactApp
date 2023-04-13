import React from 'react'
import {store} from './App'

function cart() {
  
  return (
    <div className='card'>
      <div className='card-body'>
        <h2 className='card-title'>
          <store.Consumer>
          { (value) => {<h4>{value}</h4>}}

          </store.Consumer>
        </h2>
      </div>

    </div>
  )
}

export default cart;