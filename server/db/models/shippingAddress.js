import mongoose from 'mongoose';

const shippingAddressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Firstname is required.'
    },
    lastName: {
        type: String,
        required: 'Lastname is required.'
    },
    address: {
        type: String,
        required: 'Shipping address is required.'
    },
    city: {
        type: String,
        required: 'City is required.'
    },
    state: {
        type: String,
        required: 'State is required.'
    },
    postalCode: {
        type: String,
        required: 'Postal code is required.'
    },
    country: {
        type: String,
        required: 'Country is required.'
    }
})

const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema);

export default ShippingAddress;