import { Constants as C } from './'
import { Action } from 'redux'

export interface StartRequestTextAction extends Action<C.START_REQUEST_TEXT> {}
export interface FinishRequestTextAction
  extends Action<typeof C.FINISH_REQUEST_TEXT> {
  text: string
}
export interface ErrorRequestTextAction
  extends Action<typeof C.ERROR_REQUEST_TEXT> {
  errorMsg: string
}

export const startRequestText = (): StartRequestTextAction => ({
  type: C.START_REQUEST_TEXT,
})

export const finishRequestText = (text: string): FinishRequestTextAction => ({
  type: C.FINISH_REQUEST_TEXT,
  text,
})

export const errorRequestText = (errorMsg: string): ErrorRequestTextAction => ({
  type: C.ERROR_REQUEST_TEXT,
  errorMsg,
})

// export const finishRequestText: (text: string) => FinishRequestTextAction = (
//   text,
// ) => ({
//   type: C.FINISH_REQUEST_TEXT,
//   text,
// })
