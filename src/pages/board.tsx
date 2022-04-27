import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from 'src/sagas/sagaBoard'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_BBS } from 'src/schema'
import { writeBBS, deleteBBS } from 'src/services/board'
import WithLoading from 'src/components/common/WithLoading'
import Input from 'src/components/forms/Input'
import Button from 'src/components/forms/Button'
import BoardList from 'src/components/board/List'

import type { NextPage } from 'next'
import type { ReactElement, ReactNode, MouseEventHandler } from 'react'
import type { State } from 'src/interface/state'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface ResetInputRef {
  resetInputs(): void
}

const ListWithLoading = WithLoading(BoardList)

const Board: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const { bbsList } = useSelector((state: State) => ({
    bbsList: state.board.bbsList,
  }))
  const { memid } = useSelector((state: State) => state.member)
  const initialInputState = {
    title: '',
    body: '',
  }
  const [dataLoading, setDataLoading] = useState<boolean>(false)
  const [inputs, setInputs] =
    useState<Record<string, string>>(initialInputState)
  const { title, body } = inputs
  const [createBBS, { data, loading, error }] = useMutation(CREATE_BBS)
  const childCompRefTitle = useRef<ResetInputRef>(null)
  const childCompRefBody = useRef<ResetInputRef>(null)

  useEffect(() => {
    loadBBS()
  }, [])

  const loadBBS = async () => {
    setDataLoading(true)
    await dispatch(fetchList())
    setDataLoading(false)
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onWrite = async (): Promise<void> => {
    const result = await writeBBS({ title, body })
    if (result) {
      setInputs({ ...initialInputState })
      childCompRefTitle.current?.resetInputs()
      childCompRefBody.current?.resetInputs()
      loadBBS()
    }
  }

  const onWriteGql = async (): Promise<void> => {
    const params = {
      payload: {
        member_id: memid,
        title,
        body,
      },
    }
    const result = await createBBS({
      variables: params,
    })
    if (result) {
      setInputs({ ...initialInputState })
      childCompRefTitle.current?.resetInputs()
      childCompRefBody.current?.resetInputs()
      loadBBS()
    }
  }

  const onDelete = async (id?: number): Promise<void> => {
    const result = await deleteBBS(id!)
    if (result) {
      loadBBS()
    }
  }

  return (
    <>
      <section>Board</section>
      <section>
        <Input
          type="text"
          name="title"
          placeholder="title"
          onChange={onChange}
          ref={childCompRefTitle}
        />
        <Input
          type="text"
          name="body"
          placeholder="leave a message"
          onChange={onChange}
          ref={childCompRefBody}
        />
        <Button name="Write" onButtonClick={onWrite} />
        <Button name="Write by GQL" onButtonClick={onWriteGql} />
        <ListWithLoading
          isLoading={dataLoading}
          repos={bbsList}
          onDelete={onDelete}
        />
        <div>
          <button onClick={loadBBS}>get bbs</button>
        </div>
      </section>
    </>
  )
}

export default Board
