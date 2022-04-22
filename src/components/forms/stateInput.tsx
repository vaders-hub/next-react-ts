import { useState, forwardRef, useImperativeHandle, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from 'src/interface/state'
import { updateInput } from 'src/sagas/sagaForm'

const Input = (props: any): React.ReactElement => {
  const dispatch = useDispatch()
  const inputData = useSelector((state: any) => state.forms.inputs.login)
  const { type, name } = props
  const emitChage = async (e: ChangeEvent<HTMLInputElement>) => {
    await dispatch(updateInput(e, name))
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
