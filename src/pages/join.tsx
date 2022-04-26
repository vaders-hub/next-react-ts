import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from 'src/sagas/sagaMember'
import { clearInput } from 'src/sagas/sagaForm'
import StateInput from '../components/forms/stateInput'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Join: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const inputData = useSelector((state: any) => state.forms.inputs.join)
  const { id, pw } = inputData

  const onRegister = async (): Promise<any> => {
    await dispatch(register(id, pw))
    dispatch(clearInput('join'))
  }

  useEffect(() => {
    return () => {
      dispatch(clearInput('join'))
    }
  }, [])

  return (
    <>
      <section>Join</section>
      <section>
        <StateInput form="join" name="id" type="text" />
        <StateInput form="join" name="pw" type="password" />
        <button type="button" onClick={onRegister}>
          register
        </button>
      </section>
    </>
  )
}

export default Join
