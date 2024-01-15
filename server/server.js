import express from "express";
import 'dotenv/config';
import connectDB from './db/connectDB.js';
import UserRouter from './routers/userRouter.js';
import AuthRouter from './routers/authRouter.js'
import ProductRouter from './routers/productRouter.js';
import CartRouter from './routers/cartRouter.js'
import cors from 'cors';
const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', AuthRouter);

app.use(cors());
app.use('/api/user', UserRouter);
app.use('/api/product', ProductRouter);
app.use('/api/cart', CartRouter);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });