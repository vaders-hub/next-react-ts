import { BoardResponse } from "../apis/bbs";

export type Action = {
  type: string;
  list?: BoardResponse[];
  memid?: string;
  mempw?: string;
  data?: string;
  payload?: any;
};

export type State = {
  bbsList: BoardResponse[] | undefined;
  bbs?: bbsList;
  member?: any;
};

namespace State {
  export const other = 1;
}
