const Input = (props: any): React.ReactElement => {
  const { type, name } = props
  const emitChage = (e: any) => {
    props.onChange(e)
  }

  return <input name={name} type={type} onChange={emitChage}></input>
}

export default Input
