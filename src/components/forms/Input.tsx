import { useState, forwardRef, useImperativeHandle, ChangeEvent } from 'react'

import compStyles from 'src/styles/components.module.scss'

interface ResetInputRef {
  resetInputs(): void
}
interface CustomInputProps {
  type: string
  name: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<ResetInputRef, CustomInputProps>(
  (props, ref): React.ReactElement => {
    const { type, name, placeholder } = props
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
        className={compStyles.defaultInput}
        name={name}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={emitChage}
      ></input>
    )
  },
)

export default Input
