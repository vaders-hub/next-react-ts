import { BoardResponse } from '../apis/bbs'

export type Action = {
  type: string
  list?: BoardResponse[]
  memid?: string
  mempw?: string
  data?: string
  payload?: any
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
    login?: {
      id?: string
      pw?: string
    }
  }
}

namespace State {
  export const other = 1
}
