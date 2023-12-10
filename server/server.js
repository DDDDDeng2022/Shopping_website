import express from "express";
import connectDB from './db/index.js';

const PORT = 3000;
const app = express();

connectDB();

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`)});