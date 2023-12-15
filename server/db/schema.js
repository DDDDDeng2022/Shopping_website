import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Types.ObjectId,
        ref: "Role"
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: {
            validator: function (value) {
                return value.includes('@');
            }
        }
    },
    password: {
        type: String,
        required: 'Password is required',
    },
    signup_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    last_login_at: {
        type: Date
    },
    shipping_address: {
        type: mongoose.Types.ObjectId,
        ref: "ShippingAddress"
    },
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: "Order"
    }],
    cart: {
        type: mongoose.Types.ObjectId,
        ref: "Cart"
    }
})

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

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

const User = mongoose.model("User", userSchema);
const Role = mongoose.model("Role", roleSchema);
const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema);

export default {
    User,
}