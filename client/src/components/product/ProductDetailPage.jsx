import * as React from 'react';
import "../../App.css"
import { Grid, Chip, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles'
import { useParams } from 'react-router-dom';
import { ParoductButton } from './ProductListPage';

const Img = styled("img")(({ theme }) => ({
    display: "block",
    maxWidth: "500px",
    maxHeight: "500px",
    aspectRatio: "1 / 1",
    objectFit: "cover", // 保证图片不失真
    [theme.breakpoints.down('md')]: {
        width: "100%",
        maxWidth: 'calc(min(100% - 40px,500px))',
        maxHeight: 'calc(min(100% - 40px,500px))',
        padding: "20px",
    },
    [theme.breakpoints.up('md')]: {
        width: "45%",
        maxWidth: "500px",
        maxHeight: "500px",
        padding: "40px"
    }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "system-ui",
    fontWeight: "600",
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
    },
}));

function ProductDetailPage() {
    let { id } = useParams();
    const [product, setProduct] = React.useState(null);
    React.useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/product/${id}`);
                const data = await response.json();
                setProduct(data);
                console.log("data", data)
            } catch (err) {
                console.error('Error:', err);
            }
        };
        fetchProductById();
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
                                {/* {product.name} */}
                                Mata Quest2 VR headset
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
                                <Chip label="Out of Stock" sx={{ borderRadius: "5px", backgroundColor: "#ff777721", color: "red", fontWeight: "500", fontSize: "13px" }} />
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
                                Hundreds of hit games, one-of-a-kid experiences, live events, new ways to stay fit and agrowing community.
                                Hundreds of hit games, one-of-a-kid experiences, live events, new ways to stay fit and agrowing community.
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