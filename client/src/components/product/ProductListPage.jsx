/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography, Grid, Box, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledTypography } from './styledFile/productListPageStyle';
import ProductButton from './ParoductButton';

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
            <ProductButton product={product}></ProductButton>
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
