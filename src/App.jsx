import React from 'React'
import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Post from './pages/Post'

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/post' component={Post} />
  </Switch>
)
