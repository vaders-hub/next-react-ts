import { combineReducers } from 'redux'
import { AllEffect, ForkEffect, all } from 'redux-saga/effects'

import member, { membersSaga } from './sagaMember'
import board, { boardSaga } from './sagaBoard'
import lang from './lang'

const rootReducer = combineReducers({
  board,
  member,
  lang,
})

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([membersSaga(), boardSaga()])
}

export default rootReducer
