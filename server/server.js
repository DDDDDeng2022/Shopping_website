import express from "express";
import 'dotenv/config';
import connectDB from './db/connectDB.js';
import UserRouter from './routers/userRouter.js';
import ProductRouter from './routers/productRouter.js';
const PORT = 3000;
const app = express();

connectDB();

app.use('/api/user', UserRouter);
app.use('/api/product', ProductRouter);

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });