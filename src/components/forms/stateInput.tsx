import { useCallback, ChangeEvent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from 'src/interface/state'
import { updateInput } from 'src/sagas/sagaForm'

const Input = (props: any): React.ReactElement => {
  const dispatch = useDispatch()
  const { form, type, name } = props
  const inputData = useSelector((state: any) => state.forms.inputs[form])
  const emitChage = async (e: ChangeEvent<HTMLInputElement>) => {
    await dispatch(updateInput(form, e, name))
  }

  return (
    <input
      name={name}
      type={type}
      value={inputData[name]}
      onInput={emitChage}
    ></input>
  )
}

export default Input
