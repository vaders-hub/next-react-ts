import { Reducer } from 'redux'
import initialState from '../stores'
import { SimpleTextState, AllActions } from 'src/epics/types'
import { Constants as C } from 'src/epics/constants'

const simpleTextReducer: Reducer<SimpleTextState, AllActions> = (
  state = initialState.chat,
  action,
) => {
  switch (action.type) {
    case C.START_REQUEST_TEXT:
      return {
        ...state,
        data: [],
      }
    case C.FINISH_REQUEST_TEXT:
      return {
        ...state,
        data: [{ ha: 'ho' }],
      }
    case C.ERROR_REQUEST_TEXT:
      return {
        ...state,
        error: action.errorMsg,
      }
    default:
      return state
  }
}

export default simpleTextReducer
