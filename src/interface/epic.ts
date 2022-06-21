import { Action } from 'redux'

export enum Constants {
  START_REQUEST_TEXT = 'START_REQUEST_TEXT',
  FINISH_REQUEST_TEXT = 'FINISH_REQUEST_TEXT',
  ERROR_REQUEST_TEXT = 'ERROR_REQUEST_TEXT',
  FETCH_USERS = 'FETCH_USERS',
  ADD_USERS = 'ADD_USERS',
}

export interface StartRequestTextAction
  extends Action<typeof Constants.START_REQUEST_TEXT> {}
export interface FinishRequestTextAction
  extends Action<typeof Constants.FINISH_REQUEST_TEXT> {
  text: string
}
export interface ErrorRequestTextAction
  extends Action<typeof Constants.ERROR_REQUEST_TEXT> {
  errorMsg: string
}
export interface FetchUserAction extends Action<typeof Constants.FETCH_USERS> {
  userId: string
}
export interface AddUserAction extends Action<typeof Constants.ADD_USERS> {
  user: any
}

export interface RootState {
  simpleText: SimpleTextState
}

export interface SimpleTextState {
  type?: string
  text?: string
  errorMsg?: string
  isLoading?: boolean
  data?: {}[]
  users?: string[]
  userId?: string
}

export type AllActions =
  | StartRequestTextAction
  | FinishRequestTextAction
  | ErrorRequestTextAction
  | FetchUserAction
  | AddUserAction
