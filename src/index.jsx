import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import DataProvider from './DataProvider'
import App from './App'

ReactDOM.hydrate(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
