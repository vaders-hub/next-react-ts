import apis from "../plugins/apis";

export interface MemberResponse {
  data?: string;
}

export const onRegister = async (
  memid: string,
  mempw: string
): Promise<MemberResponse | undefined> => {
  const result = await apis({
    url: "/members/signup",
    method: "post",
    data: {
      memid: memid,
      mempw: mempw,
    },
  });
  if (result) return result.data as Promise<MemberResponse>;
};

export const onSignin = async (
  memid: string,
  mempw: string
): Promise<MemberResponse | undefined> => {
  const result = await apis({
    url: "/members/signin",
    method: "post",
    data: {
      memid: memid,
      mempw: mempw,
    },
  });
  if (result) return result.data as Promise<MemberResponse>;
};
