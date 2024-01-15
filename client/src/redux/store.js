import { configureStore, combineReducers } from "@reduxjs/toolkit";
import EmailPswReducer from "./EmailPswSlice";
import UserReducer from "./userSlice";
import LoginStatusReducer from "./loginStateSlice"

const rootReducer = combineReducers({
    emailPsw: EmailPswReducer,
    user: UserReducer,
    isLogin: LoginStatusReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
