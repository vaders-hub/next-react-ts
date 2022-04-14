import { combineReducers } from 'redux'
import lang from './lang'
import extra from './extra'

const rootReducer = combineReducers({
  lang,
  extra,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
