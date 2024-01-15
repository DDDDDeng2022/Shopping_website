import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, ButtonGroup, Divider, FormControl, TextField, Tooltip } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const COUPONS = ["chuwa", "happy2024", "happyproject1"];
const StyledBox = styled(Box)(({ theme }) => ({
    fontFamily: "sans-serif",
    color: "black",
    fontSize: "14px",
    position: "fixed",
    zIndex: "9999",
    backgroundColor: "white",
    [theme.breakpoints.up('sm')]: {
        top: 0,
        right: 0,
        transform: 'translate(0, 0)',
        width: "450px",

    },
    [theme.breakpoints.down('sm')]: {
        top: '49%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
    },
}));
const FlexedBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#5048E5",
        },
    },
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    '.MuiButtonGroup-grouped': {
                        minWidth: "30px",
                        borderColor: "#bbb8b8",
                        padding: "0",
                        fontSize: "15px"
                    },
                }
            }
        }, MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: 6,
                    fontSize: "14px",
                    "&.Mui-disabled": {
                        color: "black",
                        border: "1px solid #bbb8b8"
                    },
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: "8px",
                        fontSize: "14px",
                    },
                },
            },
        },
    },
});

const SecondBox = styled(Box)(({ theme }) => ({
    position: "fixed",
    zIndex: "9998",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

export default function CartDialog(props) {
    // eslint-disable-next-line react/prop-types
    const { openCartDialog, handleOpenCartDialog } = props;
    const [totalPrice, setTotalPrice] = React.useState(100);
    const [discount, setDiscount] = React.useState(1);
    const [couponErrorInfo, setCouponErrorInfo] = React.useState("");
    const [coupon, setCoupon] = React.useState("");
    // todo,把购物车信息放进依赖函数里
    React.useEffect(() => {
        setTotalPrice(200);
    }, [])
    let dummyCartCounter = 1;
    const handleConpons = () => {
        console.log("!COUPONS.includes(coupon.toLowerCase()): ", COUPONS.includes(coupon.toLowerCase()));
        if (coupon == "") {
            setCouponErrorInfo("Coupon can not be blank!");
            setDiscount(1);
        } else if (!COUPONS.includes(coupon.toLowerCase())) {
            setCouponErrorInfo("Invalid coupon!");
            setDiscount(1);
        }
        else {
            setCouponErrorInfo("");
            setDiscount(0.88);
        }
    }
    return (
        openCartDialog &&
        <ThemeProvider theme={theme}>
            <SecondBox>
                <StyledBox >
                    <Box sx={{
                        backgroundColor: '#5048E5',
                        color: "white",
                        fontSize: {
                            xs: "20px",
                            sm: "30px"
                        },
                        padding: {
                            xs: "10px 15px",
                            sm: "15px 25px"
                        }
                    }}>
                        Cart ({dummyCartCounter})
                        <IconButton
                            onClick={handleOpenCartDialog}
                            sx={{
                                position: 'absolute',
                                right: {
                                    xs: 8,
                                    sm: 16
                                },
                                top: {
                                    xs: 6,
                                    sm: 16
                                }
                            }}
                        >
                            <CloseIcon sx={{
                                color: "white",
                                fontSize: {
                                    xs: "24px",
                                    sm: "30px"
                                }
                            }} />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        padding: {
                            xs: "15px", sm: "20px"
                        },
                        maxHeight: {
                            xs: 'calc(100%-222px)',
                            sm: "600px"
                        },
                        overflowY: "auto",
                    }}>
                        <FlexedBox sx={{ gap: "20px" }}>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </FlexedBox>
                        <FlexedBox >
                            <Typography sx={{ color: "grey", fontSize: "14px" }}>Apply Discount Code</Typography>
                            <Box sx={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "10px", }}>
                                <FormControl sx={{ width: "100%" }}>
                                    <TextField
                                        onChange={(e) => { setCoupon(e.target.value) }}
                                        placeholder="COUPON"
                                        type="text"
                                        error={couponErrorInfo != ""}
                                    // helperText={couponErrorInfo}
                                    />
                                </FormControl>
                                <Button variant="contained" onClick={handleConpons}>Apply</Button>
                            </Box>
                        </FlexedBox>
                        <Divider light />
                        <FlexedBox sx={{ justifyContent: 'center', gap: "8px", fontWeight: "600" }}>
                            <Payment title="subtotal" number={totalPrice} />
                            <Payment title="tax" number={totalPrice * discount * 0.1} />
                            <Payment title="discount" number={totalPrice * (1 - discount)} />
                            <Payment title="estimatedTotal" number={totalPrice * discount * 1.1} />
                            <Button fullWidth variant="contained" onClick={handleOpenCartDialog} sx={{ marginTop: "5px" }}>
                                Continue to checkout
                            </Button>
                        </FlexedBox>
                    </Box>
                </StyledBox >
            </SecondBox>
        </ThemeProvider>
    );
}

const CartItem = () => {
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

const Payment = ({ title, number }) => {
    return <div
        style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'space-between',
        }}>
        <div>{title}</div>
        <div>${`${number.toFixed(2)}`}</div>
    </div>
}