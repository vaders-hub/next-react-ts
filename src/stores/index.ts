import { member } from './member'
import { board } from './board'
import { forms } from './forms'
import { chat } from './chat'

const rootState: any = {
  selectedLang: 'fr',
  chat,
  member,
  board,
  forms,
}

export default rootState
