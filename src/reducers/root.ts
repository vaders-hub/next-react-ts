import { createAction, ActionType, createReducer } from "typesafe-actions";
import initialState from "../stores";

interface TestReducer {
  no: number;
  text: string;
}

export const RESET_TEXT = "root/RESET_TEXT";
export const ADD_TEXT = "root/ADD_TEXT";
export const MOD_TEXT = "root/MOD_TEXT";
export const REMOVE_TEXT = "root/REMOVE_TEXT";

export const resetText = createAction(RESET_TEXT)();
export const addText = createAction(ADD_TEXT)<TestReducer>();
export const modifyText = createAction(MOD_TEXT)<TestReducer>();
export const removeText = createAction(REMOVE_TEXT)();

export const actions = { resetText, addText, modifyText, removeText };

type TestReducerActions = ActionType<typeof actions>;

const root = createReducer<TestReducer, TestReducerActions>(initialState.root, {
  [RESET_TEXT]: () => ({
    no: 0,
    text: "",
  }),
  [ADD_TEXT]: (state, action) => {
    return {
      no: action.payload.no,
      text: action.payload.text,
    };
  },
  [MOD_TEXT]: (state, action) => {
    return {
      no: state.no + 1,
      text: state.text + "?",
    };
  },
  [REMOVE_TEXT]: (state) => ({
    no: state.no,
    text: "",
  }),
});

export default root;
