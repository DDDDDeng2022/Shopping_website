/* eslint-disable react/prop-types */
import * as React from 'react';
import { CardActions, Button, Box } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useNavigate } from 'react-router-dom';
import { StyledBox, StyledButtonGroup, StyledButton } from './styledFile/productListPageStyle';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateCart } from '../cart/cartApi';
import { setCart } from '../../redux/userSlice';


export default function ProductButton({ product }) {
    const cart = useSelector(state => state.user.cart);
    const role = useSelector(state => state.user.role);
    const userId = useSelector(state => state.user.user_id);
    const isLogin = useSelector((state) => state.isLogin);
    const isInCart = cart && cart.some(item => item.productId === product._id);
    const [quantity, setQuantity] = React.useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const productInCart = cart.find(item => item.productId === product._id);
        const amount = productInCart ? productInCart.amount : 0;
        setQuantity(amount)
    }, [cart]);
    const navigate = useNavigate();
    const handleUpdate = async (e, type) => {
        e.stopPropagation();
        if (!isLogin) {
            navigate('/signin');
        }
        else {
            try {
                const updatedCart = await updateCart(userId, product._id, type);
                dispatch(setCart(updatedCart));
            } catch (error) {
                console.error('Error:', error);
            }
        }

    };

    const handleEdit = (e) => {
        e.stopPropagation();
        navigate(`/productedit`, { state: { product: product } });
    };
    return <CardActions sx={{ display: 'flex', alignItems: 'center', padding: "0", flexWrap: 'wrap', maxWidth: "300px" }}>

        {isInCart ?
            <StyledBox>
                <StyledButtonGroup disableElevation variant="contained">
                    <Button size="small" onClick={(e) => handleUpdate(e, "decrease")}><RemoveRoundedIcon sx={{ fontSize: 20 }} /></Button>
                    <StyledButton size="small" disabled>{quantity}</StyledButton>
                    <Button size="small" onClick={(e) => handleUpdate(e, "add")}><AddRoundedIcon sx={{ fontSize: 20 }} /></Button>
                </StyledButtonGroup>
            </StyledBox>
            : <Button fullWidth sx={{
                backgroundColor: "#5048E5",
                color: "white",
                ':hover': {
                    backgroundColor: '#0b048c',
                }
            }}
                onClick={(e) => handleUpdate(e, "add")}>Add </Button>
        }

        {role === "Admin" && <Box sx={{ width: "40%" }}>
            <Button size="small" fullWidth
                onClick={handleEdit}
                sx={{ backgroundColor: "#f9fafb", color: "grey", border: "1px solid #ccc" }}>Edit</Button>
        </Box>}
    </CardActions>
}
