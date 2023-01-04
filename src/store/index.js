import { createStore, combineReducers } from "redux";
import { messageReducer } from "./message/reducer";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer
});

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());