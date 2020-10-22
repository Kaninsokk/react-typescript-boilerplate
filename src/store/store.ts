import "regenerator-runtime/runtime";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducer/rootReducer";
import { rootSaga } from "../saga/rootSaga";

export const store = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const appStore = createStore(
    rootReducer(),
    applyMiddleware(sagaMiddleWare, thunk)
  );

  sagaMiddleWare.run(rootSaga);

  return appStore;
};
