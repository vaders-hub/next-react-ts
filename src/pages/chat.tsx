import { useEffect, useState, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import StateInput from '../components/forms/stateInput'
import Button from '../components/forms/Button'

import styles from '@/styles/layout.module.scss'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import type { State } from 'src/interface/state'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Chat: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const onSend = async (): Promise<any> => {}

  useEffect(() => {}, [])

  return (
    <>
      <section>
        <h3 className={styles.title}>Chat</h3>
      </section>
      <section>
        {
          <div>
            <input name="message" type="text" />
            {/* <StateInput form="login" name="message" type="text" /> */}
            <Button name="Send" onButtonClick={onSend} />
          </div>
        }
      </section>
    </>
  )
}

export default Chat
