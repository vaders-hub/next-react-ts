import { all, fork } from 'redux-saga/effects'

import { membersSaga } from './sagaMember'

export default function* rootSaga() {
  yield all([membersSaga()])
}
