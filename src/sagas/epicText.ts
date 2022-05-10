import { Reducer } from 'redux'
import initialState from '../stores'
import { SimpleTextState, AllActions, Constants as C } from 'src/interface/epic'

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
    case C.ADD_USERS:
      return {
        ...state,
        users: state?.users?.concat('1234')
      }
    default:
      return state
  }
}

export default simpleTextReducer
