import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {rootReducer} from './reducer'

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filtersReducer,
//      },
// })
const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  });

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({reducer: persistedReducer, middleware,})

export const persistor = persistStore(store)