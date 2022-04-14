import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from 'src/sagas/sagaMember'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Join: NextPageWithLayout = () => {
  const dispatch = useDispatch()
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

  const onRegister = async (): Promise<any> => {
    dispatch(register(memid, mempw))
  }
  return (
    <>
      <section>Join</section>
      <section>
        <input type="text" name="memid" placeholder="id" onChange={onChange} value={memid} />
        <input type="password" name="mempw" placeholder="pw" onChange={onChange} value={mempw} />
        <button type="button" onClick={onRegister}>
          register
        </button>
      </section>
    </>
  )
}

// Join.getLayout = function getLayout(page: any) {
//   return (
//     <Layout>
//       <div>{page}</div>
//     </Layout>
//   );
// };

export default Join
