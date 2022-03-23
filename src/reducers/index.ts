import { combineReducers } from "redux";
import { AllEffect, ForkEffect, all } from "redux-saga/effects";
import root from "./root";
import extra from "./extra";
import lang from "./lang";

const rootReducer = combineReducers({
  root,
  extra,
  lang
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
