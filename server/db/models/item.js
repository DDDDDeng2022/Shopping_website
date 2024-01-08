import mongoose from 'mongoose';
import Product from './product.js';

/**
 * item schema{
 * product_id of products in the order,
 * amount of each product in the order
 * }
 */

const itemSchema = new mongoose.Schema({
    product_id:{
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Product"
    },
    purchased_amount:{
        type: Number,
        required: true,
    }
});

const Item = mongoose.model("Item", itemSchema);
export default Item;

