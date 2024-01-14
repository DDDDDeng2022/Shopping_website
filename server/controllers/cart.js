import Cart from "../db/models/cart.js";
import Item from "../db/models/item.js";
import User from "../db/models/user.js";

//used to generate a cart when creating a new user
const createCart = async()=>{
    try{
        const cart = await Cart();
        await cart.save();
        return cart._id;
    }catch(error){
        console.error(error.message);
    }
};

const addItem = async(req, res) =>{
    try{
        const{ userId, productId} = req.params;
        if(!userId || !productId){
            res.status(400).json({ message: 'cart id or product id missing' });
            return;
        }
        const user = await User.findById(userId);
        if(!user.cart){
            res.status(500).json({ message: 'Server Error' });
            return;
        }
        const targetItem = user.cart.items.find(item => item.product_id === productId);
        if(targetItem){
            targetItem.purchased_amount += 1;
        }else{
            const newItem = await Item({product_id: productId, purchased_amount: 1});
            user.cart.items.push(newItem);
        }
        await user.save();
        res.status(200).json({ message: 'product added successfully', cart: user.cart });

    }catch(error){
        res.status(500).json({ message: 'Server Error' });
    }
};

const decrementItem = async(req, res) =>{
    try{
        const{ userId, productId} = req.params;
        if(!userId || !productId){
            res.status(400).json({ message: 'cart id or product id missing' });
            return;
        }
        const user = await User.findById(userId);
        if(!user.cart){
            res.status(500).json({ message: 'Server Error' });
            return;
        }
        const targetItemIndex = user.cart.items.findIndex(item => item.product_id === productId);
        if (targetItemIndex !== -1) {
          const targetItem = user.cart.items[targetItemIndex];
    
          if (targetItem.purchased_amount > 1) {
            targetItem.purchased_amount -= 1;
          } else {
            // If purchased_amount is 1, remove the item from the array
            user.cart.items.splice(targetItemIndex, 1);
            }
            await user.save();
            res.status(200).json({ message: 'product decremented successfully', cart: user.cart });
        } else {
            res.status(404).json({ message: 'Product not found in the cart' });
        }
    }catch(error){
        res.status(500).json({ message: 'Server Error' });
    }
};

const removeItem = async(req, res) =>{
    try{
        const{ userId, productId} = req.params;
        if(!userId || !productId){
            res.status(400).json({ message: 'cart id or product id missing' });
            return;
        }
        const user = await User.findById(userId);
        if(!user.cart){
            res.status(500).json({ message: 'Server Error' });
            return;
        }
        const targetItemIndex = user.cart.items.findIndex(item => item.product_id === productId);
        if (targetItemIndex !== -1) {
          const targetItem = user.cart.items[targetItemIndex];
            user.cart.items.splice(targetItemIndex, 1);
            await user.save();
            res.status(200).json({ message: 'all this kind of product are removed successfully', cart: user.cart });
        } else {
            res.status(404).json({ message: 'Product not found in the cart' });
        }
    }catch(error){
        res.status(500).json({ message: 'Server Error' });
    }
};


export{
    createCart,
    addItem,
    decrementItem,
    removeItem,
}
// const addItem  = async(req, res)=>{
//     try{
//         const{ cartId, productId} = req.params;
//         if(!cartId || !productId){
//             res.status(400).json({ message: 'cart id or product id missing' });
//             return;
//         }
//         const cart = await cart.findById(req.params?.cartId);
//         const cart = cart.cart;
//         let item = cart.find(item => item.id === )


//     }catch(error){

//     }
// }
// [
//     {productid: "XXXXX", amount: 1},
//     {productid: "XXXXX", amount: 2},
//     ...
// ]