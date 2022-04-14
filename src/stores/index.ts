import { extra } from './extra'

const initialState: any = {
  root: { no: 0, text: 'hello' },
  selectedLang: 'fr',
  extra: { ...extra },
}

export default initialState
