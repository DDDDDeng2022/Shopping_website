import mongoose from 'mongoose';
import Item from './item.js';
import User from './user.js';

const cartSchema = new mongoose.Schema({
    // user_id:{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    // },
    items:[{
        type: mongoose.Types.ObjectId,
        ref: "Item"
    }]
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;