import apis from 'src/lib/apis'

export interface BoardResponse {
  bbs_id?: number
  title: string
  body: string
}

const writeBBS = async (payload: BoardResponse) => {
  const result = await apis({
    url: '/api/bbs/write',
    method: 'post',
    data: payload,
  })
  if (result) return true
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

export { writeBBS, loadBBS }
