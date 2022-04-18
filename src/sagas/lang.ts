import initialState from '../stores'

type ActionTypes = {
  type: string
  payload: string
}

const SET_LANG = 'SET_LANG'

export const setLang = (payload: string): ActionTypes => ({
  type: SET_LANG,
  payload,
})

const selectedLang = (state: string = initialState.selectedLang, action: ActionTypes): string => {
  // why repeat?
  switch (action.type) {
    case SET_LANG:
      return action.payload
    default:
      return state
  }
}

export default selectedLang
