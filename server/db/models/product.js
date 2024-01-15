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
    link:
    {
        type: String,
        required: "Photo link is required "
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;