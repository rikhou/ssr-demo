import React from 'React'
import {Switch, Route} from 'react-router-dom'
import {useStore} from 'react-redux'
import PageTemplate from './PageTemplate'
import routes from './routes'

export default () => {
  const store = useStore()
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            key={route.path}
            exact={route.exact}
            render={(props) => (
              <PageTemplate {...props} route={route} store={store}>
                <route.component />
              </PageTemplate>
            )}
          ></Route>
        )
      })}
    </Switch>
  )
}
