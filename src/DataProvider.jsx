import React, {createContext} from 'react'

export const DataContext = createContext({})

export default class DataProvider extends React.Component {
  constructor(props) {
    super(props)
    this.initialData = window.__DATA__ || {}
    delete window.__ROUTE_DATA__
  }

  render() {
    return <DataContext.Provider value={this.initialData || {}}>{this.props.children}</DataContext.Provider>
  }
}
