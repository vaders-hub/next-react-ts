import { Reducer, combineReducers } from 'redux'

import { SimpleTextState, AllActions } from 'src/epics/types'
import { Constants as C } from 'src/epics/constants'
import { RootState } from 'src/epics/types'

export const simpleTextReducer: Reducer<SimpleTextState, AllActions> = (
  state = { isLoading: false },
  action,
) => {
  switch (action.type) {
    case C.START_REQUEST_TEXT:
      return {
        ...state,
        isLoading: true,
        isCancelled: false,
      }
    case C.FINISH_REQUEST_TEXT:
      return {
        ...state,
        text: action.text,
        isLoading: false,
      }
    case C.ERROR_REQUEST_TEXT:
      return {
        ...state,
        errorMsg: action.errorMsg,
        isLoading: false,
      }
    default:
      return state
  }
}

const reducers: Reducer<RootState> = combineReducers<RootState>({
  simpleText: simpleTextReducer,
})

export default reducers
