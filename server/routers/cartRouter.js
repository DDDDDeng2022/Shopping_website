import express from "express";

import {
    addItem,
    decreaseItem,
    formatCart,
    removeItem,
    clearItem
    // test
} from '../controllers/cart.js';

const router = express.Router();

// increase the amount of a product by 1, if none exists, create a new item
router.put('/user/:userId/product/:productId/add', addItem);
// router.get('test', test)

// decrease the amount of a product by 1, if only one exists, remove the whole item
router.put('/user/:userId/product/:productId/decrease', decreaseItem);

//remove the entire item, i.e. decrease the amount directly to 0
router.put('/user/:userId/product/:productId/remove', removeItem);

router.put('/user/:userId/clear', clearItem);
//get a format cart object for cart component at front end:
/* return data: 
 "formatCart": [
        {
            "productId": "64bcacc56f0a17edbfc43239",
            "amount": 5
        },
        {
            "productId": "64bcacc56f0a17edbfc43237",
            "amount": 1
        }
    ]*/
router.get('/formatCart/:userId', formatCart);

export default router;