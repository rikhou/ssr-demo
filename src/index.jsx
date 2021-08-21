import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import DataProvider from './DataProvider'
import App from './App'

function renderUI() {
  const initialData = window.__DATA__ || {}
  ReactDOM.hydrate(
    <BrowserRouter>
      <DataProvider initialData={initialData}>
        <App />
      </DataProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )
  delete window.__ROUTE_DATA__
}

renderUI()
