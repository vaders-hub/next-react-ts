import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  ChangeEvent,
} from 'react'
import compStyles from 'src/styles/components.module.scss'

interface CustomButtonProps {
  name: string
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: CustomButtonProps): React.ReactElement => {
  const { name = 'default' } = props
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onButtonClick(e)
  }
  return (
    <button className={compStyles.defaultBtn} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
