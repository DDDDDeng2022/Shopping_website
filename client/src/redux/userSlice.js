import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user_name: '',
        role: '',
        cart: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user_name = action.payload.name;
            state.role = action.payload.role.name;
            state.cart = action.payload.cart
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        // eslint-disable-next-line no-unused-vars
        resetUser: (state, action) => {
            state.user_name = '',
            state.role = '',
            state.cart = []
        }
    }
})

export const { setUser, setCart, resetUser } = UserSlice.actions;

export default UserSlice.reducer;