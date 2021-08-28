import {combineReducers} from 'redux'
import PostReducer from './post/reducer'

export default combineReducers({
  post: PostReducer
})
