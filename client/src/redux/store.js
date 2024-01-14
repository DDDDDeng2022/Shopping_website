import { configureStore, combineReducers } from "@reduxjs/toolkit";
import EmailPswSlice from "./EmailPswSlice";
import UserSlice from "./userSlice";
import LoginStatusSlice from "./loginStateSlice"

const rootReducer = combineReducers({
    emailPsw: EmailPswSlice.reducer,
    user: UserSlice.reducer,
    isLogin: LoginStatusSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

