import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { startRequestText, fetchUsers } from 'src/epics/'

import Input from 'src/components/forms/Input'
import Button from '../components/forms/Button'

import styles from '@/styles/layout.module.scss'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import type { State } from 'src/interface/state'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface ResetInputRef {
  resetInputs(): void
}

const Chat: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const initialInputState = {
    memid: '',
  }
  const [inputs, setInputs] =
    useState<Record<string, string>>(initialInputState)
    const { memid } = inputs  
  const childCompRefMemId = useRef<ResetInputRef>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const onSend = async (): Promise<any> => {
    dispatch(fetchUsers(memid))
    childCompRefMemId.current?.resetInputs()
  }

  useEffect(() => {}, [])

  return (
    <>
      <section>
        <h3 className={styles.title}>Chat</h3>
      </section>
      <section>
        {
          <div>
            <Input
              type="text"
              name="memid"
              placeholder="member id"
              onChange={onChange}
              ref={childCompRefMemId}
            />
            <Button name="Search RxJS" onButtonClick={onSend} />
          </div>
        }
      </section>
    </>
  )
}

export default Chat
