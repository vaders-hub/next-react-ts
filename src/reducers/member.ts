import { all, call, put, take, fork, select, takeEvery, ForkEffect } from 'redux-saga/effects'
import { ResponseGenerator } from 'src/interface/common'
import { onSignin, onRegister } from 'src/services/member'
import { Action, State } from 'src/interface/state'

const memberActions = {
  SIGN_INFO: 'SIGN_INFO',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  CLEAR_INFO: 'CLEAR_INFO',
  SIGN_UP: 'SIGN_UP',
  REGISTER: 'REGISTER',
}

const initialState = {
  signedIn: false,
  memid: '',
  mempw: '',
}

export const passAuth = (memid: string, mempw: string) => ({
  type: memberActions.SIGN_INFO,
  memid,
  mempw,
})
export const signIn = (data: string | undefined) => ({
  type: memberActions.SIGN_IN,
  data,
})
export const signOut = () => ({
  type: memberActions.SIGN_OUT,
})
export const clearInfo = () => ({
  type: memberActions.CLEAR_INFO,
})
export const getMember = (state: State): State => state.member

export const register = (memid: string, mempw: string) => ({
  type: memberActions.REGISTER,
  memid,
  mempw,
})

function* signInSaga(action: any) {
  try {
    const { memid, mempw } = action
    const result: ResponseGenerator = yield call(onSignin, memid, mempw)

    yield put({
      type: memberActions.SIGN_IN,
      payload: result,
    })
    yield put(clearInfo())
  } catch (e) {
    console.log('e', e)
  }
}

function* registerSaga(action: Action) {
  try {
    const { memid, mempw }: any = action
    const result: ResponseGenerator = yield call(onRegister, memid, mempw)
  } catch (e) {
    console.log('e', e)
  }
}

export function* membersSaga(): any {
  yield takeEvery(memberActions.SIGN_INFO, signInSaga)
  yield takeEvery(memberActions.REGISTER, registerSaga)
}

const member = (state: any = initialState, action: Action): Action => {
  switch (action.type) {
    case memberActions.SIGN_INFO:
      return {
        ...state,
        memid: action.memid,
        mempw: action.mempw,
      }
    case memberActions.SIGN_IN:
      return {
        ...state,
        signedIn: action.payload.message === '로그인 성공' ? true : false,
      }
    case memberActions.CLEAR_INFO:
      return {
        ...state,
        memid: '',
        mempw: '',
      }
    case memberActions.SIGN_OUT:
      return {
        ...state,
        signedIn: false,
      }
    case memberActions.REGISTER:
      return {
        ...state,
        memid: action.memid,
        mempw: action.mempw,
      }
    default:
      return state
  }
}

export default member
