import React from 'React'
import {Switch, Route} from 'react-router-dom'
import routes from './routes'

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route path={route.path} key={route.path} exact={route.exact} component={route.component}></Route>
    ))}
  </Switch>
)
