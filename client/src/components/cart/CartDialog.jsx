/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Divider, FormControl, TextField } from '@mui/material';
import { StyledBox, FlexedBox, cartTheme, SecondBox } from './cartStyle';
import CartItem from './CartItem';
const COUPONS = ["chuwa", "happy2024", "happyproject1"];

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
        <ThemeProvider theme={cartTheme}>
            <SecondBox>
                <StyledBox >
                    <Box sx={{
                        backgroundColor: '#5048E5',
                        color: "white",
                        fontSize: { xs: "20px", sm: "30px" },
                        padding: { xs: "10px 15px", sm: "15px 25px" }
                    }}>
                        Cart
                        <span style={{ fontSize: "14px", paddingLeft: "5px" }}>({dummyCartCounter})</span>
                        <IconButton
                            onClick={handleOpenCartDialog}
                            sx={{ position: 'absolute', right: { xs: 8, sm: 16 }, top: { xs: 6, sm: 16 } }}
                        >
                            <CloseIcon sx={{ color: "white", fontSize: { xs: "24px", sm: "30px" } }} />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        padding: { xs: "15px", sm: "20px" },
                        maxHeight: { xs: 'calc(100%-222px)', sm: "600px" },
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
                                        placeholder="promotion code"
                                        type="text"
                                        error={couponErrorInfo != ""}
                                    // helperText={couponErrorInfo}
                                    />
                                </FormControl>
                                <Button variant="contained" onClick={handleConpons}>Apply</Button>
                            </Box>
                        </FlexedBox>
                        <Divider light />
                        <FlexedBox sx={{ justifyContent: 'center', gap: "8px", fontWeight: "600", marginTop: "10px" }}>
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
const Payment = ({ title, number }) => {
    return <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between' }}>
        <div>{title}</div>
        <div>${`${number.toFixed(2)}`}</div>
    </div>
}