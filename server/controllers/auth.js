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

        res.status(200).json({ success: !isTokenExpired, message: "User token valid" })
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        console.log(password);
        const result = await User.findOne({ email: email }).populate('role').then((user) => {
            console.log(`result : ${user}`)
            if (!user) {
                res.status(403).json({ message: 'Invalid email' });
            } else if (user.password !== password) {
                res.status(403).json({ message: 'Invalid password' });
            }
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '3d' });
            res.status(201).json({ user_name: user.name, role: user.role, cart: user.cart, token });
        });
    } catch (err) {
        console.log(err);
        // res.status(500).json({ message: 'Server Error' });
    }
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