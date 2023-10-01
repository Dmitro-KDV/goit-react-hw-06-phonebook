import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {rootReducer} from './reducer'

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filtersReducer,
//      },
// })

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({reducer: persistedReducer})

export const persistor = persistStore(store)