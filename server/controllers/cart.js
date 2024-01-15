import User from "../db/models/user.js";

const addItem = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        if (!userId || !productId) {
            res.status(400).json({ message: 'cart id or product id missing' });
            return;
        }
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        if (!user.cart) {
            user.cart = [];
        }
        user.cart.push(productId);
        await user.save();
        res.status(200).json({ message: 'product added successfully', cart: user.cart });

    } catch (error) {
        console.error('Error in addItem:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const decreaseItem = async (req, res) => {

    const { userId, productId } = req.params;
    if (!userId || !productId) {
        res.status(400).json({ message: 'cart id or product id missing' });
        return;
    }
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        if (!user.cart) {
            user.cart = [];
        }
        const indexToRemove = user.cart.findIndex(item => item.toString() === productId);

        if (indexToRemove !== -1) {
            user.cart.splice(indexToRemove, 1);
            await user.save();
            res.status(200).json({ message: 'Product removed successfully', cart: user.cart });
        } else {
            res.status(404).json({ message: 'Product not found in the cart' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const removeItem = async (req, res) => {
    const { userId, productId } = req.params;
    if (!userId || !productId) {
        res.status(400).json({ message: 'cart id or product id missing' });
        return;
    }
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        if (!user.cart) {
            user.cart = [];
        }
        user.cart = user.cart.filter((item) => { return item.toString() !== productId });
        await user.save();
        res.status(200).json({ message: 'product removed successfully', cart: user.cart });

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const clearItem = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        res.status(400).json({ message: 'cart id or product id missing' });
        return;
    }
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        if (!user.cart) {
            user.cart = [];
        }
        user.cart = [];
        await user.save();
        res.status(200).json({ message: 'product removed successfully', cart: user.cart });

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


const formatCart = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        res.status(400).json({ message: 'user id missing' });
        return;
    }
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const cart = user.cart;
        if (!cart) {
            res.status(200).json({ message: 'product removed successfully', formatCart: cart });
            return;
        }

        const counter = {};
        cart.forEach((item) => {
            counter[item] = (counter[item] || 0) + 1;
        });
        const formatCart = Object.entries(counter).map(([productId, amount]) => ({ productId, amount }));
        res.status(200).json({ message: 'product removed successfully', formatCart: formatCart });

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}


export {
    addItem,
    decreaseItem,
    removeItem,
    clearItem,
    formatCart,
}
