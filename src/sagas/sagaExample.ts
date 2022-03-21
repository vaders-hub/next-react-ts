import { call, put, takeEvery } from "redux-saga/effects";
import { MOD_TEXT, ADD_TEXT } from "../reducers/root";

function saga1() {
  console.log("saga1");
}

function sagaAdd() {
  return new Promise((rsv, rjt) => {
    rsv(true);
  });
}

function* fetchAddExampleSaga() {
  // const {no, text} = action.payload
  try {
    yield call(saga1);
    yield put({
      type: MOD_TEXT,
    });
    const result: boolean = yield sagaAdd();
    console.log("result", result);
  } catch (error) {
    console.log("error", error);
  }
}

export default function* watchExample() {
  yield takeEvery(ADD_TEXT, fetchAddExampleSaga);
}
