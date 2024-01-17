import express from 'express';
import multer from 'multer';
import {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadPhoto
} from '../controllers/product.js';

const router = express.Router();

// 设置 multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });


// api/products
router.get('/', getAllProducts);
// api/products/:id
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/upload', upload.single('image'), uploadPhoto);

export default router;

