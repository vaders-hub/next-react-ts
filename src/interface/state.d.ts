import { BoardResponse } from '../apis/bbs'

export type Action = {
  type: string
  list?: BoardResponse[]
  memid?: string
  mempw?: string
  data?: string
  payload?: {
    value?: string
    formName?: string
    name?: string
    inputType?: string
  }
}

export type SigninAction = {
  memid: string
  mempw: string
}

export type State = {
  bbsList?: BoardResponse[] | undefined
  board?: bbsList
  member?: any
  inputs?: {
    [key: string | number]: unknown
  }
}

namespace State {
  export const other = 1
}
