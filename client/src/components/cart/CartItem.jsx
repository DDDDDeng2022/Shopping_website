import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Tooltip } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { FlexedBox } from './cartStyle';


export default function CartItem() {
    const [quantity, setQuantity] = React.useState(1);

    const handleDecrease = (e) => {
        //  todo 联合购物车使用
        e.stopPropagation();
        setQuantity(q => q - 1);
    };
    const handleIncrease = (e) => {
        //  todo 联合购物车使用
        e.stopPropagation();
        setQuantity(q => q + 1);
    }
    return <div style={{ display: "flex", gap: "20px", height: 100 }}>
        <img
            style={{ width: 100, height: 100 }}
            src="https://www.dailypaws.com/thmb/RX8699_a38h-sFohET1VVRt64sI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skateboarding-rabbit-168986582-2000-9979fa684e214a129d2323e911b7b589.jpg"
            alt="Metaa Quest2 VR"
        />
        <FlexedBox sx={{ flex: 1, justifyContent: "space-between" }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}>
                <Tooltip title="Meta">
                    <Typography sx={{ fontSize: "16px", fontWeight: "600", maxWidth: "250px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                        {/* {`$${product ? product.title : ""}`} */}
                        Meta Quest2 VR
                    </Typography>
                </Tooltip>

                <Typography sx={{ fontSize: "16px", color: "#5048E5", fontWeight: "600" }}>
                    {/* {`$${product ? product.price.toFixed(2) : ""}`} */}
                    $200.00
                </Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}>
                <ButtonGroup disableElevation>
                    <Button onClick={handleDecrease}>
                        <RemoveRoundedIcon sx={{ fontSize: 15, color: "#bbb8b8" }} />
                    </Button>
                    <Button disabled>{quantity}</Button>
                    <Button onClick={handleIncrease}>
                        <AddRoundedIcon sx={{ fontSize: 15, color: "#bbb8b8" }} />
                    </Button>
                </ButtonGroup>
                <Button variant="text" onClick={() => { }} sx={{
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