import User from "../db/models/user.js";

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params?.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: decodeURIComponent(req.params?.id) }).then((user) => {
            console.log(user);
            res.status(200).json(user);
        });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const getCart = async (req, res) => {
    try {
        const cart = await User.findById(req.params?.id).populate('cart');
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

// const createUser = async (req, res) => {
//     try {
//         const user = new User(req.body);
//         user.name = user.email?.split('@')[0];
//         if (!user.name || !user.email || !user.password) {
//             res.status(400).json({ message: "Please provide required fields" });
//         }
//         await user.save();
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// }

const updateUser = async (req, res) => {
    try {
        const updated_user = req.body;
        updated_user.updated_at = new Date();
        await User.findByIdAndUpdate(req.params?.id, updated_user, { new: true });
        res.status(200).json(updated_user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params?.id);
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export {
    getUserById,
    getUserByEmail,
    getCart,
    // createUser,
    updateUser,
    deleteUser
}