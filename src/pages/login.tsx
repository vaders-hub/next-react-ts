import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { passAuth, signOut } from 'src/sagas/sagaMember'
import { clearInput } from 'src/sagas/sagaForm'
import StateInput from '../components/forms/stateInput'
import SearchedList from 'src/components/common/SearchComplete'
import Button from '../components/forms/Button'

import styles from '@/styles/layout.module.scss'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import type { State } from 'src/interface/state'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Login: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const {
    member: { signedIn },
  }: State = useSelector((state) => state)
  const inputData = useSelector((state: State) => state.forms.inputs.login)
  const { id, pw } = inputData

  const onSignIn = async (): Promise<any> => {
    await dispatch(passAuth(id, pw))
    await dispatch(clearInput('login'))
  }

  const onSignOut = () => {
    dispatch(signOut())
  }

  useEffect(() => {
    return () => {
      dispatch(clearInput('login'))
    }
  }, [signedIn])

  return (
    <>
      <section>
        <h3 className={styles.title}>Login</h3>
      </section>
      <section>
        {!signedIn ? (
          <div>
            <StateInput form="login" name="id" type="text" />
            <StateInput form="login" name="pw" type="password" />
            <SearchedList/>
            <Button name="Log-in" onButtonClick={onSignIn} />
          </div>
        ) : (
          <div>
            <Button name="Log-out" onButtonClick={onSignOut} />
          </div>
        )}
      </section>
    </>
  )
}

export default Login
