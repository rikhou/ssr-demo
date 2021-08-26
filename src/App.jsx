import React from 'React'
import {Switch, Route} from 'react-router-dom'
import PageTemplate from './PageTemplate'
import routes from './routes'

export default () => (
  <Switch>
    {routes.map((route) => {
      return (
        <Route
          path={route.path}
          key={route.path}
          exact={route.exact}
          render={(props) => (
            <PageTemplate {...props} route={route}>
              <route.component />
            </PageTemplate>
          )}
        ></Route>
      )
    })}
  </Switch>
)
