import { Subject } from 'rxjs'
import initialState from 'src/stores'

type ActionTypes = {
  type: string
  payload: {}
}

const subject = new Subject()

const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessage = (payload: {}): ActionTypes => ({
  type: SEND_MESSAGE,
  payload,
})

const chatMessages = (
  state: {}[] = initialState.chat,
  action: ActionTypes,
): [{}] => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [{}]
    default:
      return [
        {
          status: '',
          data: [],
          error: '',
        },
      ]
  }
}

export default chatMessages
