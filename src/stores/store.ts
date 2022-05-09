import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux'
import storage from 'redux-persist/lib/storage'
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer, { rootSaga } from 'src/sagas/'

export const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware()

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}
export let store: any
const makeStore = (initialState: any) => {
  const isClient = typeof window !== 'undefined'

  if (isClient) {
    const { persistReducer } = require('redux-persist')
    const persistConfig = {
      key: 'selectedLang',
      storage,
      whitelist: ['selectedLang'],
    }

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      bindMiddleware([sagaMiddleware]),
    )

    store.__PERSISTOR = persistStore(store)

    if (window.Cypress) {
      window.store = store
    }
  } else {
    store = createStore(
      rootReducer,
      initialState,
      bindMiddleware([sagaMiddleware, epicMiddleware]),
    )
  }

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
