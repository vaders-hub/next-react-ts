import compStyles from 'src/styles/components.module.scss'

import type { BoardResponse } from 'src/services/board'

const List = (props: any) => {
  const { repos } = props
  return (
    <ul className={compStyles.boardList}>
      {repos.map(
        (data: BoardResponse): React.ReactNode => (
          <li key={data.bbs_id}>
            <div>
              <p className={compStyles.titleArea}>
                <span className={compStyles.strong}>{data.title}</span>
                <em> written by </em>
                <span>{data.member_id}</span>
                <button
                  className={compStyles.delBtn}
                  onClick={() => props.onDelete(data.bbs_id)}
                >
                  <p>x</p>
                </button>
              </p>
            </div>
            <p className={compStyles.date}>{data.created_at}</p>
            <div>
              <p>{data.body}</p>
            </div>
          </li>
        ),
      )}
    </ul>
  )
}

export default List
