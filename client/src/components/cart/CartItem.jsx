/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Tooltip } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { FlexedBox } from './cartStyle';
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/userSlice";
import { updateCart } from './cartApi';

export default function CartItem({ product, quantity }) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.user_id);
    const handleUpdate = async (type) => {
        try {
            const updatedCart = await updateCart(userId, product._id, type);
            dispatch(setCart(updatedCart));
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return <div style={{ display: "flex", gap: "20px", height: 100 }}>
        <img
            style={{ width: 100, height: 100 }}
            src={product.link}
            alt={product.name}
        />
        <FlexedBox sx={{ flex: 1, justifyContent: "space-between" }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}>
                <Tooltip title="Meta">
                    <Typography sx={{ fontSize: "16px", fontWeight: "600", maxWidth: "250px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                        {`${product ? product.name : ""}`}
                    </Typography>
                </Tooltip>

                <Typography sx={{ fontSize: "16px", color: "#5048E5", fontWeight: "600" }}>
                    {`$${product ? (product.price * quantity).toFixed(2) : ""}`}

                </Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}>
                <ButtonGroup disableElevation>
                    <Button onClick={() => handleUpdate("decrease")}>
                        <RemoveRoundedIcon sx={{ fontSize: 15, color: "#bbb8b8" }} />
                    </Button>
                    <Button disabled>{quantity}</Button>
                    <Button onClick={() => handleUpdate("add")}>
                        <AddRoundedIcon sx={{ fontSize: 15, color: "#bbb8b8" }} />
                    </Button>
                </ButtonGroup>
                <Button variant="text" onClick={() => { handleUpdate("remove") }} sx={{
                    fontSize: "15px",
                    color: "grey",
                    '&:hover': {
                        backgroundColor: "#dedede",
                        opacity: 0.8,
                    }
                }}>
                    <u >remove</u>
                </Button>
            </div>
        </FlexedBox>

    </div>

}