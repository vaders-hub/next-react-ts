import { extra } from "./extra";

const initialState: any = {
  root: { no: 0, text: "hello" },
  extra: { ...extra },
};

export default initialState;
