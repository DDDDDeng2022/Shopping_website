import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Skeleton, ButtonGroup } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';
const StyledTypography = styled(Typography)({
    color: "grey",
    fontSize: "15px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
});
const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: '4px'

});
const StyledButtonGroup = styled(ButtonGroup)({
    "& .MuiButtonGroup-grouped": {
        border: "none",
        "&:not(:last-of-type)": {
            borderRight: "none",
        },
    }
});
const StyledButton = styled(Button)({
    backgroundColor: "blue",
    color: "white",
    "&.Mui-disabled": {
        backgroundColor: "#1976d2",
        color: "white",
        opacity: 1,
    },

});

function ProductItem({ product }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${product._id}`);
    };
    return (
        <Card sx={{ backgroundColor: "white", padding: "8px", border: "1px solid #ccc" }} onClick={handleClick}>
            <CardMedia
                sx={{ height: 120 }}
                image={product && product.link ? product.link : ""}
                title={product ? product.name : ""}
            />
            <CardContent sx={{ padding: 0 }}>
                <StyledTypography>
                    {product ? product.name : ""}
                </StyledTypography>
                <Typography sx={{ color: "black", fontSize: "20px" }}>
                    {`$${product ? product.price.toFixed(2) : ""}`}
                </Typography>
            </CardContent>
            <ParoductButton product={product}></ParoductButton>
        </Card>
    );
}

export function ParoductButton({ product }) {
    const [quantity, setQuantity] = React.useState(1);
    const navigate = useNavigate();
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

    const handleEdit = (e) => {
        e.stopPropagation();
        navigate(`/edit/${product._id}`);
    };
    return <CardActions sx={{ display: 'flex', alignItems: 'center', padding: "0", flexWrap: 'wrap', maxWidth: "300px" }}>
        <StyledBox>
            <StyledButtonGroup disableElevation variant="contained">
                <Button size="small" onClick={handleDecrease}><RemoveRoundedIcon color="action" sx={{ fontSize: 20 }} /></Button>
                <StyledButton size="small" disabled>{quantity}</StyledButton>
                <Button size="small" onClick={handleIncrease}><AddRoundedIcon sx={{ fontSize: 20 }} color="action" /></Button>
            </StyledButtonGroup>
        </StyledBox>
        <Box sx={{ width: "40%" }}>
            <Button size="small" fullWidth
                onClick={handleEdit}
                sx={{ backgroundColor: "#f9fafb", color: "grey", border: "1px solid #ccc" }}>Edit</Button>
        </Box>
    </CardActions>
}
const ProductListPage = ({ productsData }) => {
    console.log("productsData: ", productsData);
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 15, md: 25 }}
        >
            {productsData
                ? productsData.map((product) => (
                    <Grid item xs={10} sm={5} md={5} key={product._id}>
                        <ProductItem product={product} />
                    </Grid>
                ))
                :
                Array.from(Array(10)).map((_, index) => (
                    <Grid xs={10} sm={5} md={5} key={index}>
                        <Box key={index} sx={{ marginRight: 0.5, my: 5, backgroundColor: "#f9fafb" }}>
                            <Skeleton variant="rectangular" height={130} sx={{ backgroundColor: "#ccc" }} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ backgroundColor: "#ccc" }} />
                                <Skeleton width="60%" sx={{ backgroundColor: "#ccc" }} />
                            </Box>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    )
}


export default ProductListPage
