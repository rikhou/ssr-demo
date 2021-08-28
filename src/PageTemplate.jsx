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

    if (props.staticContext) {
      console.log('server side render')
      this.state = {haveData: true}
    } else {
      if (!lodash.isEmpty(context)) {
        this.state = {haveData: true}
        console.log('client side render raised by SSR')
      } else {
        console.log('client side render')
        const currentRoute = routes.find((route) => matchPath(location.pathname, route)) || {}
        const getInitialProps = currentRoute.component.getInitialProps
        if (getInitialProps) {
          getInitialProps(props.store).then(() => {
            this.setState({haveData: true})
          })
        } else {
          this.state = {haveData: true}
        }
      }
    }
  }

  render() {
    if (this.state.haveData) {
      return this.props.children
    } else {
      return <></>
    }
  }
}
