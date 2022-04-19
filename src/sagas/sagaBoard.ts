import { put, takeEvery, ForkEffect } from 'redux-saga/effects'
import { loadBBS, BoardResponse } from 'src/services/board'
import initialState from '../stores'

import { ResponseGenerator } from 'src/interface/common'
import { Action, State } from 'src/interface/state'

const bbsActions = {
  FETCH_LIST: 'FETCH_LIST',
  APPLY_LIST: 'APPLY_LIST',
}

export const fetchList = (): Action => ({ type: bbsActions.FETCH_LIST })
export const applyList = (list: BoardResponse[]): Action => ({
  type: bbsActions.APPLY_LIST,
  list,
})

function* fetchSaga() {
  const result: ResponseGenerator = yield loadBBS()
  if (result) {
    yield put(applyList(result.data))
  }
}

export function* boardSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(bbsActions.FETCH_LIST, fetchSaga)
}

const board = (state: State = initialState.board, action: Action): State => {
  switch (action.type) {
    case bbsActions.APPLY_LIST:
      return {
        ...state,
        bbsList: action.list,
      }
    default:
      return state
  }
}

export default board
