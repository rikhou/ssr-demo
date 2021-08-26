import React from 'react'
import {matchPath} from 'react-router-dom'
import lodash from 'lodash'
import routes from './routes'
import {DataContext} from './DataProvider'

export default class PageTemplate extends React.Component {
  static contextType = DataContext

  state = {}
  constructor(props, context) {
    super(props)

    if (props.staticContext && props.staticContext.data) {
      console.log('server side render')
      this.state = {data: props.staticContext.data}
    } else {
      if (!lodash.isEmpty(context)) {
        this.state = {data: context}
        console.log('client side render raised by SSR')
      } else {
        console.log('client side render')
        const currentRoute = routes.find((route) => matchPath(location.pathname, route)) || {}
        const getInitialProps = currentRoute.component.getInitialProps
        getInitialProps &&
          getInitialProps().then((data) => {
            this.setState({data})
          })
      }
    }
  }

  render() {
    if (this.state.data) {
      return React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {data: this.state.data})
      })
    } else {
      return <></>
    }
  }
}
