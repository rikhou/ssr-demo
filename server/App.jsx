import React from 'React'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from '../src/App'

export default ({location, store}) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  )
}
