import {createSlice} from "@reduxjs/toolkit";

export const LoginStatusSlice = createSlice({
    name: 'isLogin',
    initialState: false,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        }
    }
})

export const { setIsLogin } = LoginStatusSlice.actions;

export default LoginStatusSlice.reducer;