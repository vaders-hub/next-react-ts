import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { passAuth, signOut } from 'src/sagas/sagaMember'
import Input from '../components/forms/Input'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Login: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const { member }: any = useSelector((state) => state)

  const [inputs, setInputs] = useState({
    memid: '',
    mempw: '',
  })

  const { memid, mempw } = inputs
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onSignin = async (): Promise<any> => {
    dispatch(passAuth(memid, mempw))
    setInputs({ memid: '', mempw: '' })
  }

  const onSignOut = () => {
    dispatch(signOut())
  }
  return (
    <>
      <section>Login</section>
      <section>
        <Input type="text" name="memid" onChange={onChange} value={memid} />
        <Input type="password" name="mempw" placeholder="pw" onChange={onChange} value={mempw} />
        <button type="button" onClick={onSignin}>
          sign-in
        </button>
      </section>
    </>
  )
}

export default Login
