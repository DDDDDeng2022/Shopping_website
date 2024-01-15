import { createSlice } from "@reduxjs/toolkit";

const formatCart = (cart) => {
    const countMap = cart.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
    }, {});

    // 将计数结果转换为所需格式的数组
    return Object.keys(countMap).map(productId => ({
        productId: productId,
        amount: countMap[productId]
    }));
};

const calculateTotalAmount = (cart, products) => {

    const formatedCart = formatCart(cart);
    return formatedCart.reduce((total, cartItem) => {
        const product = products.find(p => p._id === cartItem.productId);
        return total + (product ? product.price * cartItem.amount : 0);
    }, 0);
};

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user_id: '',
        user_name: '',
        role: '',
        cart: [],
        cartTotal: { quantity: 0, amount: 0 },
        products: [],
        filter: ""
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setUser: (state, action) => {
            state.user_id = action.payload.id;
            state.user_name = action.payload.name;
            state.role = action.payload.role.name;
            state.cart = formatCart(action.payload.cart)
            state.cartTotal = {
                quantity: action.payload.cart.length,
                amount: calculateTotalAmount(action.payload.cart, state.products)
            }
        },
        setCart: (state, action) => {
            state.cart = formatCart(action.payload);
            state.cartTotal = {
                quantity: action.payload.length,
                amount: calculateTotalAmount(action.payload, state.products)
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
       resetUser: (state, action) => {
            state.user_name = '',
            state.role = '',
            state.cart = []
        }
    }
})

export const { setUser, setCart, setProducts, setFilter,resetUser } = UserSlice.actions;

export default UserSlice.reducer;