import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favouriteReducer from "./features/favouriteSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from './features/searchSlice'

const persistConfig = {
    key: 'root',
    storage
};
const rootReducer = combineReducers({
    cart: cartReducer,
    favourite: favouriteReducer,
    search: searchReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);
