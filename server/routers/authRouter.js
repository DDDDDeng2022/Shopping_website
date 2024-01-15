import express from "express";
import { login, signup, checkLogin } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/checkLogin', checkLogin)

router.post('/signup', signup);

export default router;