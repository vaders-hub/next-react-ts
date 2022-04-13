import apis from "../plugins/apis";

export interface BoardResponse {
  bbs_id?: number;
  title: string;
  body: string;
}

export const onLoad = async (): Promise<BoardResponse | undefined> => {
  try {
    const result = await apis({
      url: "/bbs/read",
      method: "get",
      data: {},
    });
    if (result) return result.data as Promise<BoardResponse>;
  } catch (e) {
    console.log("onLoad e", e);
  }
};
