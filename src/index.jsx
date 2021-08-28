import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import DataProvider from './DataProvider'
import {getClientStore} from './store'
import App from './App'

const store = getClientStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
