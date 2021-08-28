import * as Types from './actionTypes'

const initState = {}

export default (state = initState, action) => {
  switch (action.type) {
    case Types.SET_POST:
      return {...state, data: action.payload}
    default:
      return {...state}
  }
}
