import { combineReducers } from 'redux'
import { AllEffect, ForkEffect, all } from 'redux-saga/effects'

import member, { membersSaga } from './sagaMember'
import board, { boardSaga } from './sagaBoard'
import forms from './sagaForm'
import selectedLang from './sagaLang'
// import chat from './sagaChat'
import epic from './epicText'

const rootReducer = combineReducers({
  board,
  member,
  selectedLang,
  forms,
  // chat,
  epic,
})

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([membersSaga(), boardSaga()])
}

export default rootReducer
