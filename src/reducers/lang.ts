import { delay, put, takeEvery, ForkEffect } from "redux-saga/effects";

type ActionTypes = {
  type: string;
  payload: string;
};

type StateTypes = {
  selectedLang: string;
};

const initialState = {
  selectedLang: "en",
};

const SET_LANG = "SET_LANG";

export const setLang = (payload: string): ActionTypes => ({
  type: SET_LANG,
  payload,
});

const lang = (
  state: StateTypes = initialState,
  action: ActionTypes
): StateTypes => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        selectedLang: action.payload,
      };
    default:
      return state;
  }
};

export default lang;
