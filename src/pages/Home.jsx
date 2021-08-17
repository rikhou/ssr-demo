import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
  function onClick() {
    console.log('Click')
  }

  return (
    <div>
      <h1>Page Home.</h1>
      <button onClick={onClick}>Click</button>
      <div>
        <Link to='/post'>Link to Post</Link>
      </div>
    </div>
  )
}
