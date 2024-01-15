import Category from "../db/models/category.js";
import Product from "../db/models/product.js";

const getAllCategories = async (req, res)=>{
    try{
        const categories = await Category.find();
        const formatCategories = [];
        categories.forEach(category => {
            formatCategories.push({id: category._id, name: category.name})
        });
        res.status(200).json({categories: formatCategories});
    }catch(error){
        console.error('Error in getAllCategories:', error.message);
       res.status(500).json({ message: 'Server Error' });
   }
    
};

const getCategoryByName = async (req, res)=>{
    try{
        if(!req.params || !req.params.name){
            res.status(400).json({message: "id of query category is missing"});
            return;
        }
        const category = await Category.find({ name: req.params.name});
        res.status(200).json({category: category});
    }catch(error){
        console.error('Error in getCategoryByName:', error.message);
       res.status(500).json({ message: 'Server Error' });
   }
    
};

const getCategoryById = async (req, res)=>{
    try{
        if(!req.params || !req.params.id){
            res.status(400).json({message: "id of query category is missing"});
            return;
        }
        const category = await Category.findById(req.params.id);
        res.status(200).json({category: category});
    }catch(error){
        console.error('Error in getCategoryById:', error.message);
       res.status(500).json({ message: 'Server Error' });
   }
    
};

const createCategory = async (req, res)=>{
    try{
        const name = req.params.name;
        console.log("test in create categories", name);
        if(!name){
            res.status(400).json({message: "name of new category is missing"});
            return;
        }
        const category = new Category({name: name});
        const savedCategory = await category.save();
        res.status(200).json({message: `new category ${name} is created`, category: savedCategory});
    }catch(error){
        console.error('Error in createCategory:', error.message);
       res.status(500).json({ message: 'Server Error' });
   }
    
};

const assignCategory = async (req, res)=>{
    try{
        if(!req.params || !req.params.id || !req.params.name){
            res.status(400).json({message: "id or name is missing"});
            return;
        }
        const product = await Product.findById(req.params.id);
        const category = await Category.findOne({ name: req.params.name});
        if(!product || !category){
            res.status(404).json({message: "no such product or category"});
        }
        product.category = category._id;
        const savedPrduct = await product.save();
        res.status(200).json({message: `category ${category.name} is assignd to product ${product._id}`, product: savedPrduct});            
    }catch(error){
        console.error('Error in assignCategory:', error.message);
       res.status(500).json({ message: 'Server Error' });
   }
}

export {
    getAllCategories,
    createCategory,
    getCategoryById,
    getCategoryByName,
    assignCategory
}