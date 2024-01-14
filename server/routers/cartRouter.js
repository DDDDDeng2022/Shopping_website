import express from "express";

import {
    createCart,
    addItem,
    decrementItem,
    removeItem,
}from '../controllers/cart.js';

const router = express.Router();

// increase the amount of a product by 1, if none exists, create a new item
router.put('/cart/addItem/:userId/:productId', addItem);

// decrease the amount of a product by 1, if only one exists, remove the whole item
router.put('/cart/decrementItem/:userId/:productId', decrementItem);

//remove the entire item, i.e. decrease the amount directly to 0
router.put('/cart/removeItem/:userId/:productId', removeItem);

export default router;