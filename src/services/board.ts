import apis from 'src/lib/apis'
import { store } from '../stores/store'

export interface BoardResponse {
  bbs_id?: number
  title: string
  body: string
}

const writeBBS = async (payload: BoardResponse) => {
  const {
    member: { memid },
  } = store.getState()

  if (!memid) return
  const result = await apis({
    url: '/api/bbs/write',
    method: 'post',
    data: {
      ...payload,
      member_id: memid,
    },
  })
  if (result) return true
}

const deleteBBS = async (payload: number) => {
  const {
    member: { memid },
  } = store.getState()

  if (!memid) return
  try {
    const result = await apis({
      url: '/api/bbs/delete',
      method: 'post',
      data: {
        bbs_id: payload,
        member_id: memid,
      },
    })
    if (result) return true
  } catch (e) {
    console.warn(e)
  }
}

const loadBBS = async (): Promise<BoardResponse | undefined> => {
  try {
    const result = await apis({
      url: '/api/bbs/read',
      method: 'get',
      data: {},
    })
    if (result) return result.data as Promise<BoardResponse>
  } catch (e) {
    console.warn(e)
  }
}

export { writeBBS, deleteBBS, loadBBS }
