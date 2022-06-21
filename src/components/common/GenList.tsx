interface Props<T> {
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string
  data: T[]
}

export default function GenList<T extends {}>({
  data,
  renderItem,
  keyExtractor,
}: Props<T>) {
  return (
    <>
      <div>
        {data.map((item) => (
          <div></div>
        ))}
      </div>
    </>
  )
}
