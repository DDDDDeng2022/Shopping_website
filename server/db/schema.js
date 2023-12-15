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
    },
    sign_up: {
        type: Date
    },
    last_login: {
        type: Date
    },
    portrait: {

    },
    shipping_address: {
        type: String
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

const User = mongoose.model("User", userSchema);
const Role = mongoose.model("Role", roleSchema);

export default {
    User,
    Role
}