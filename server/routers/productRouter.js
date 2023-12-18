import express from 'express';
import {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.js';

// todo:后续还需要管理员授权认证等

const router = express.Router();

// api/products
router.get('/', getAllProducts);

// api/products/:id
router.get('/:id', getOneProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;

