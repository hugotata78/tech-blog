import { combineReducers } from 'redux'
import postReducer from './postsReducers'
import userReducers from './userReducers'
import categoryReducers from './categoryReducers'
import commentReducers from './commentReducers'

export const rootReducers = combineReducers({
    postReducer,
    userReducers,
    categoryReducers,
    commentReducers
})