import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer.js'

const mainReducers = combineReducers({
  newsArticles: articlesReducer,
})

export default mainReducers;