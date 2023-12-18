import mongoose from 'mongoose';
import Category from './category.js';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    price: {
        type: Number,
        required: "Product price is required "
    },
    quantity: {
        type: Number,
        required: "Product quantity is required "
    },
    photo_link:
    {
        type: String,
    },
    createdAt: {
        type: Date,
        required: "reated time is required "
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;