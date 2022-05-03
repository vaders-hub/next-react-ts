import apis from 'src/lib/apis'

export interface MemberResponse {
  data?: string
}

export const searchTerm = async (
  memid: string,
): Promise<MemberResponse | undefined> => {
  const result = await apis({
    url: '/api/members/search',
    method: 'get',
    data: {
      memid,
    },
  })
  if (result) return result.data as Promise<MemberResponse>
}
