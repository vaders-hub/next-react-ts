import type { BoardResponse } from 'src/services/board'

const List = (props: any) => {
  const { repos } = props
  return (
    <ul>
      {repos.map(
        (data: BoardResponse): React.ReactNode => (
          <li key={data.bbs_id}>
            <p>
              <span>{data.bbs_id} {data.title} {data.member_id}</span>
              <button onClick={() => props.onDelete(data.bbs_id)}>del</button>
            </p>
            <p>{data.created_at}</p>
            <p>
              {data.body}
            </p>
          </li>
        ),
      )}
    </ul>
  )
}

export default List
