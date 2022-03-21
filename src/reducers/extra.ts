import { createAction, ActionType, createReducer } from "typesafe-actions";
import initialState from "../stores";

export const UPDATE_LIST = "extra/UPDATE_LIST";

export const updateList = createAction(UPDATE_LIST)();

export const extraActions = { updateList };
const extra = createReducer(initialState.extra, {
  [UPDATE_LIST]: (state, action) => {
    return {
      ...state,
      id: "save",
    };
  },
});

export default extra;
