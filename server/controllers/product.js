import Product from '../db/models/product.js';
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params?.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        if (!product.name || !product.price || !product.quantity) {
            return res.status(400).json({ message: 'Please provide all fields' });
        }
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        req.body.updatedAt = new Date();
        await Product.findByIdAndUpdate(req.params?.id, req.body, { new: true });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params?.id);
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};