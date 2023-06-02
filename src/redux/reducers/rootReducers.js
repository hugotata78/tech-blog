import { combineReducers } from 'redux'
import postReducer from './postsReducers'
import userReducers from './userReducers'

export const rootReducers = combineReducers({
    postReducer,
    userReducers
})