import { all } from "redux-saga/effects";
import { pokeSagas } from "./pokeSaga";

export function* rootSaga() {
  yield all([pokeSagas()]);
}
