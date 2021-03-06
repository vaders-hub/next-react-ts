import { useCallback, useMemo, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

type StateTypes = { selectedLang: string }

type GetJson = {
  [key: string]: () => Promise<Record<string, unknown>>
}
type MessageData = [{}, string, () => void]

const usePrevious = <T>(value: T): T => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return <T>ref.current
}

const useLangSet = (): MessageData => {
  const selectedLang: string = useSelector(
    (state: StateTypes) => state.selectedLang,
  )
  const [message, setMessage] = useState<Record<string, unknown>>({})
  const messageLoader: GetJson = {
    en: () => import('src/assets/lang/en.json'),
    fr: () => import('src/assets/lang/fr.json'),
    de: () => import('src/assets/lang/de.json'),
  }
  const setMessageData = async () => {
    try {
      const result = await messageLoader[selectedLang]()
      setMessage(result)
    } catch (e) {
      console.log('error', e)
    }
  }

  return [message, selectedLang, setMessageData]
}

export { usePrevious, useLangSet }
