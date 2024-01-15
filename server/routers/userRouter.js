import express from "express";
// import auth from "../middleware/auth.js";

import {
    getUserById,
    getCart,
    // createUser,
    updateUser,
    deleteUser,
    getUserByEmail,
} from '../controllers/user.js';

const router = express.Router();


router.get('/:id', getUserById);
router.get('/email/:id', getUserByEmail);

router.get('/:id/cart', getCart);

// router.post('/', createUser);
// Signup will have this feature

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;