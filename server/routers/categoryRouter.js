import express from 'express';
import { createCategory, getAllCategories, getCategoryById, getCategoryByName, assignCategory } from '../controllers/category.js';

const router = express.Router();

//get formated categories array
router.get('/', getAllCategories);


// 未使用
//get category by name
router.get('/name/:name', getCategoryByName);

//get category by id
router.get('/:id', getCategoryById);

//create new category
router.post('/new/:name', createCategory);

//assign category(string: name) to product(id)
router.put('/assign/:id/:name', assignCategory);


export default router;