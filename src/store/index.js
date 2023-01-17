import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { messageReducer } from "./message/reducer";
import { profileReducer } from "./profile/reducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['messages', 'profile']
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);