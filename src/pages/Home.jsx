import React from 'react'

export default () => {
  function onClick() {
    console.log('Click')
  }

  return (
    <div>
      <h1>Page Home.</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
