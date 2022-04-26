import { useState, forwardRef, useImperativeHandle, ChangeEvent } from 'react'

interface ResetInputRef {
  resetInputs(): void
}
interface CustomInputProps {
  type: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<ResetInputRef, CustomInputProps>(
  (props, ref): React.ReactElement => {
    const { type, name } = props
    const [inputValue, setInputValue] = useState<string>('')
    const emitChage = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      props.onChange(e)
    }
    useImperativeHandle(ref, () => ({
      resetInputs() {
        setInputValue('')
      },
    }))
    return (
      <input
        name={name}
        type={type}
        value={inputValue}
        onChange={emitChage}
      ></input>
    )
  },
)

export default Input
