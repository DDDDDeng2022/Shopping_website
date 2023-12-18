import mongoose from 'mongoose';
import Item from './item.js';
import ShippingAddress from './shippingAddress.js';


const orderSummarySchema = new mongoose.Schema({
    subtotal:{
        type: Number,
        required: true,
    },
    tax:{
        type: Number,
        required: true,
    },
    discount_amount:{
        type: Number,
        required: true,
    },
    shipment_fee:{
        type: Number,
        required: true,
    }
});

const orderSchema = new mongoose.Schema({
    ordered_time:{
        type: Date,
        default: Date.now
    },
    shipping_address: {
        type: ShippingAddress.schema,
        required: false,
    },
    tracking_number:{
        type: String,
        required: false
    },
    items:[ {
        type: Item.schema,
    }],



});

const Order = mongoose.model('Order',orderSchema);
const OrderSummary = mongoose.model('OrderSummary', orderSummarySchema);
export {
    Order,
    OrderSummary
};

