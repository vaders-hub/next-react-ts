import initialState from '../stores'
import { Action, State } from 'src/interface/state'

const formActions = {
  UPDATE_INPUT: 'UPDATE_INPUT',
  CLEAR_INPUT: 'CLEAR_INPUT',
}

export const updateInput = (e: any, name: string): Action => ({
  type: formActions.UPDATE_INPUT,
  payload: { value: e.target.value, name },
})

export const clearInput = (): Action => ({
  type: formActions.CLEAR_INPUT,
})

const form = (state: State = initialState.forms, action: Action): State => {
  switch (action.type) {
    case formActions.UPDATE_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          login: {
            ...state.inputs?.login,
            [action.payload.name]: action.payload.value,
          },
        },
      }
    case formActions.CLEAR_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          login: {
            id: '',
            pw: '',
          },
        },
      }
    default:
      return state
  }
}

export default form
