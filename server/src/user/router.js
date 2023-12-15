import express from "express";

const app = express.Router();

app.get('/');

app.get('/:id');

app.put('/:id');

app.delete('/:id');

export default app;