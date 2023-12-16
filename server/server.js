import express from "express";
import 'dotenv/config';
import connectDB from './db/connectDB.js';
import UserRouter from './routers/userRouter.js';
import AuthRouter from './routers/authRouter.js'

const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', AuthRouter);

app.use('/api/user', UserRouter);

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`)});