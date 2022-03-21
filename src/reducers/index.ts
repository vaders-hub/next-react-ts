import { combineReducers } from "redux";
import { AllEffect, ForkEffect, all } from "redux-saga/effects";
import root from "./root";
import extra from "./extra";

const rootReducer = combineReducers({
  root,
  extra,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
