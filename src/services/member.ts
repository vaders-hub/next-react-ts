import apis from 'src/lib/apis'

export interface MemberResponse {
  data?: string
}

export const onRegister = async (
  memid: string,
  mempw: string,
): Promise<MemberResponse | undefined> => {
  const result = await apis({
    url: '/api/members/signup',
    method: 'post',
    data: {
      memid,
      mempw,
    },
  })
  if (result) return result.data as Promise<MemberResponse>
}

export const onSignin = async (
  memid: string,
  mempw: string,
): Promise<MemberResponse | undefined> => {
  const result = await apis({
    url: '/api/members/signin',
    method: 'post',
    data: {
      memid,
      mempw,
    },
  })
  if (result) return result.data as Promise<MemberResponse>
}
