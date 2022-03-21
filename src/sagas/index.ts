import { all, fork } from "redux-saga/effects";

import watchExample from "./sagaExample";
import sagaApiExample from "./sagaApiExample";

export default function* rootSaga() {
  yield all([fork(watchExample), fork(sagaApiExample)]);
}
