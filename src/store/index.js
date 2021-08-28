import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

export const getServerStore = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export const getClientStore = () => {
  let initState = window.__DATA__ || {}
  return createStore(reducers, initState, composeWithDevTools(applyMiddleware(thunk)))
}
