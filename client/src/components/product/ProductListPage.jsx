import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Skeleton, ButtonGroup } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { styled } from '@mui/material/styles'

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
    const [quantity, setQuantity] = React.useState(1);
    const handleDecrease = () => {
        //  todo 联合购物车使用
    };
    const handleIncrease = () => {
        //  todo 联合购物车使用
    }
    return (
        <Card sx={{ backgroundColor: "white", padding: "8px", border: "1px solid #ccc" }}>
            <CardMedia
                sx={{ height: 130 }}
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
            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "0", flexWrap: 'wrap' }}>
                <StyledBox>
                    <StyledButtonGroup disableElevation variant="contained">
                        <Button size="small"><RemoveRoundedIcon color="action" sx={{ fontSize: 20 }} /></Button>
                        <StyledButton size="small" disabled>{quantity}</StyledButton>
                        <Button size="small"><AddRoundedIcon sx={{ fontSize: 20 }} color="action" /></Button>
                    </StyledButtonGroup>
                </StyledBox>
                <Box>
                    <Button size="small" fullWidth sx={{ backgroundColor: "#f9fafb", color: "grey", border: "1px solid #ccc" }}>Edit</Button>
                </Box>
            </CardActions>


        </Card>
    );
}

const ProductListPage = ({ productsData }) => {

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
