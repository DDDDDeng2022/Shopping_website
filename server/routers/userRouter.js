import express from "express";
// import auth from "../middleware/auth";
import {
    getUser,
    getCart,
    // createUser,
    updateUser,
    deleteUser,
} from '../controllers/user';

const router = express.Router();

// router.get('/');
// Do we really need getAllUsers?

router.get('/:id', getUser);

router.get('/:id/cart', getCart);

// router.post('/', createUser);
// Signup will have this feature

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;