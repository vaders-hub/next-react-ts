import type { BoardResponse } from 'src/services/board'

const List = (props: any) => {
  const { repos } = props
  return (
    <ul>
      {repos.map(
        (data: BoardResponse): React.ReactNode => (
          <li key={data.bbs_id}>
            <p>
              {data.bbs_id} {data.title} {data.member_id}
            </p>
            <p>
              {' '}
              {data.body}{' '}
              <button onClick={() => props.onDelete(data.bbs_id)}>del</button>
            </p>
          </li>
        ),
      )}
    </ul>
  )
}

export default List
