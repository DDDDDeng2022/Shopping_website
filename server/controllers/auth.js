import User from '../db/models/user.js';
import Role from '../db/models/role.js';
import jwt from 'jsonwebtoken';

/*
    TODO: Add a JWT creator for auto-signIn
*/

const checkLogin = async (req, res) => {
    try {
        const { token } = req.body;
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const isTokenExpired = decoded.exp < Date.now() / 1000;

        if (!isTokenExpired) {
            await User.findById(decoded?.id).populate('role').then((user) => {
                res.status(200).json({ name: user.name, role: user.role, cart: user.cart })
            });
        } else {
            res.status(401).json({ message: 'Token expired' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const result = await User.findOne({ email: email }).populate('role').then((user) => {
        if (!user) {
            res.status(403).json({ message: 'Invalid email' });
        } else if (user.password !== password) {
            res.status(403).json({ message: 'Invalid password' });
        } else {
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '3d' });
            res.status(201).json({ user_id: user._id, user_name: user.name, role: user.role, cart: user.cart, token });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    });
}

const signup = async (req, res) => {
    try {
        const create_user_data = req.body;
        create_user_data.name = create_user_data.email?.split('@')[0];
        const role = await Role.findOne({ name: create_user_data.role });
        const user = new User({ ...create_user_data, role });
        if (!user.name || !user.email || !user.password) {
            res.status(400).json({ message: "Please provide required fields" });
        }
        await user.save().then(u => {
            res.status(201).json(user)
        });
    } catch (err) {
        res.status(500).json({ err, message: 'Server Error' });
    }
}

export {
    login,
    checkLogin,
    signup
}