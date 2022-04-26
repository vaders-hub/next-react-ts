import React,{ useState, forwardRef, useImperativeHandle, ChangeEvent } from 'react'

interface CustomButtonProps {
  name: string
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = 
  (props:CustomButtonProps): React.ReactElement => {
    const { name = "default" } = props
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onButtonClick(e)
    }
    return (
      <button onClick={onClick}>{name}</button>
    )
  }

export default Button
