import React, {createContext} from 'react'

export const DataContext = createContext({})

export default class DataProvider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <DataContext.Provider value={this.props.initialData || {}}>{this.props.children}</DataContext.Provider>
  }
}
