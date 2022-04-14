import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux'
import storage from 'redux-persist/lib/storage'
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from 'src/sagas/'
import rootReducer from 'src/reducers'

export const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = (initialState: any) => {
  let store: any

  const isClient = typeof window !== 'undefined'

  if (isClient) {
    const { persistReducer } = require('redux-persist')
    const persistConfig = {
      key: 'member',
      storage,
      whitelist: ['member'],
    }

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      bindMiddleware([sagaMiddleware]),
    )

    store.__PERSISTOR = persistStore(store)
  } else {
    store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]))
  }

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
