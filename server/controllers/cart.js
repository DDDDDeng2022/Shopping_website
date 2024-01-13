// import User from "../db/models/user.js";
// const addItem  = async(req, res)=>{
//     try{
//         const{ userId, productId} = req.params;
//         if(!userId || !productId){
//             res.status(400).json({ message: 'user id or product id missing' });
//             return;
//         }
//         const user = await User.findById(req.params?.userId);
//         const cart = user.cart;
//         let item = cart.find(item => item.id === )


//     }catch(error){

//     }
// }
// // [
// //     {productid: "XXXXX", amount: 1},
// //     {productid: "XXXXX", amount: 2},
// //     ...
// // ]