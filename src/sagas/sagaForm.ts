import initialState from '../stores'
import { Action, State } from 'src/interface/state'

const formActions = {
  UPDATE_INPUT: 'UPDATE_INPUT',
  CLEAR_INPUT: 'CLEAR_INPUT',
}

export const updateInput = (
  formName: string,
  e: any,
  name: string,
): Action => ({
  type: formActions.UPDATE_INPUT,
  payload: { value: e.target.value, formName, name },
})

export const clearInput = (inputType: string): Action => ({
  type: formActions.CLEAR_INPUT,
  payload: { inputType },
})

const form = (state: State = initialState.forms, action: Action): State => {
  switch (action.type) {
    case formActions.UPDATE_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload?.formName as string]: {
            ...(state.inputs![action.payload?.formName as string] as object),
            [action.payload?.name as string]: action.payload?.value,
          },
        },
      }
    case formActions.CLEAR_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload?.inputType as string]: {
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
