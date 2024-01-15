import * as React from 'react';
import { Grid, Chip, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ParoductButton } from './ProductListPage';
import { Img, StyledTypography } from './styledFile/detailedProductPageStyle';
import { getProductById } from './productApi';
import "../../App.css"

function ProductDetailPage() {
    let { id } = useParams();
    const [product, setProduct] = React.useState(null);
    React.useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data);
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }, [id]);
    return (
        <div className='content'>
            <Box sx={{
                fontFamily: "sans-serif",
                fontWeight: "600",
                fontSize: {
                    xs: "25px",
                    sm: "30px"
                },
                marginBottom: "20px"
            }}>
                Products Detail
            </Box>
            {
                !product ? "" : <Box sx={{
                    flex: "1",
                    backgroundColor: "white",
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                }} >
                    <Img alt="complex" src={product.link} />
                    <Grid container direction="column"
                        sx={{
                            paddingTop: { md: "40px", xs: "0px" },
                            paddingLeft: "20px",
                            paddingRight: {
                                md: "80px",
                                xs: "20px"
                            },
                        }}>
                        <Grid item>
                            <Typography variant="caption" sx={{ color: "#7d7d7d" }}>
                                Category1
                            </Typography>
                            <StyledTypography gutterBottom component="div" sx={{
                                color: "#5c5959",
                            }} >
                                {product.name}
                            </StyledTypography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}>
                                <StyledTypography>
                                    {`$${product.price.toFixed(2)}`}
                                </StyledTypography>
                                {/* todo判断库存 */}
                                {product.quantity === 0 && <Chip label="Out of Stock" sx={{ borderRadius: "5px", backgroundColor: "#ff777721", color: "red", fontWeight: "500", fontSize: "13px" }} />}
                            </Box>
                            <Typography sx={{
                                color: "#7d7d7d",
                                fontSize: {
                                    xs: '13px',
                                    sm: '16px',
                                },
                                fontFamily: "sans-serif",
                                marginTop: "10px",
                                marginBottom: {
                                    sm: "20px",
                                    md: "30px"
                                }
                            }} >
                                {product.description}
                            </Typography>
                            <ParoductButton product={product}></ParoductButton>
                        </Grid>
                    </Grid>
                </Box >
            }
        </div >

    )
}

export default ProductDetailPage