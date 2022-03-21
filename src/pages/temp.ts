import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  StoreEnhancer,
  Store,
} from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas/";
import rootReducer from "../reducers";

export const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
