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
        }
    }
})

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;