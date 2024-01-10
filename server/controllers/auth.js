import User from '../db/models/user';

/*
    TODO: Add a JWT creator for auto-signIn
*/

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await User.findOne({ email: email });
        if (!result) {
            res.status(403).json({ message: 'Invalid email'});
        } else if (result.password !== password) {
            res.status(403).json({ message: 'Invalid password'});
        }
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const signup = async (req, res) => {
    try {
        const user = new User(req.body);
        user.name = user.email?.split('@')[0];
        if (!user.name || !user.email || !user.password) {
            res.status(400).json({ message: "Please provide required fields" });
        }
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export {
    login,
    signup
}