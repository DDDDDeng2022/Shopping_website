const mongoose = require('mongoose');
const Product = require('./product');

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

module.exports = mongoose.module("Item", itemSchema);

