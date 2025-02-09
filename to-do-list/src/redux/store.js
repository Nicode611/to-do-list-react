import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import listsReducer from "./slices/listsSlices"

// La config du reducer persistant (KEY)
const persistConfig = {
    key : 'root',
    storage : storage,
    blacklist : [''],
    whitelist : ['lists']
}

// On utilise la methode combinedReducers de redux toolkit pour pouvoir combiner les reducers si besoin (STORAGE)
const rootReducer = combineReducers({
    lists : listsReducer
})

// Definition du reducer persistant, utilisation de la config (KEY) et des combined reducers (STORAGE)
const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    //Le middleware sert a eviter l'erreur dans la console
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

const persistor = persistStore(store)


export { store, persistor }