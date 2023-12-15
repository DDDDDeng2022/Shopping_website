import express from "express";
import 'dotenv/config';
import connectDB from './db/connectDB.js';

const PORT = 3000;
const app = express();

connectDB();
app.use('/api/v1');


app.use('/user', user);

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`)});