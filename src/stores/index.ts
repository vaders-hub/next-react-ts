import { member } from './member'
import { board } from './board'

const rootState: any = {
  root: { no: 0, text: 'hello' },
  selectedLang: 'fr',
  member,
  board,
}

export default rootState
