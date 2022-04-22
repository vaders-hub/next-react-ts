import { combineReducers } from 'redux'
import { AllEffect, ForkEffect, all } from 'redux-saga/effects'

import member, { membersSaga } from './sagaMember'
import board, { boardSaga } from './sagaBoard'
import forms from './sagaForm'
import selectedLang from './lang'

const rootReducer = combineReducers({
  board,
  member,
  selectedLang,
  forms,
})

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([membersSaga(), boardSaga()])
}

export default rootReducer
