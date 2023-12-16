import express from "express";
import auth from "../middleware/auth";

const router = express.Router();

// router.get('/');
// Do we really need getAllUsers?

router.get('/:id', auth);

router.put('/:id', auth);

router.delete('/:id', auth);

export default router;