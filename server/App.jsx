import React from 'React'
import {StaticRouter} from 'react-router-dom'
import App from '../src/App'

export default ({location, context}) => (
  <StaticRouter context={context} location={location}>
    <App />
  </StaticRouter>
)
