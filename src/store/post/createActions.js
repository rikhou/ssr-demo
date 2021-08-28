import * as Types from './actionTypes'
import fetchData from '../../helpers/fetchData'

export const setPost = () => {
  return (dispatch, getState) => {
    return fetchData().then((res) => {
      dispatch({
        type: Types.SET_POST,
        payload: res
      })
    })
  }
}

// export const setPost = async (dispatch) => {
//   const data = await fetchData()
//   dispatch({
//     type: Types.SET_POST,
//     payload: null
//   })
// }
