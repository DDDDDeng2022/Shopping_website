import * as React from 'react';
import ProductListPage from './ProductListPage';
import { Grid, Box, Skeleton, MenuItem, Button, ListItemText } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../../App.css"
import { useNavigate } from 'react-router-dom';
import { menuTheme, StyledPagination, StyledFormControl, StyledSelect } from './styledFile/mainProductPageStyle';
import { getProducts } from './productApi';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from "../../redux/userSlice";

const OPTIONS = ["Last added", "Price: low to high", "Price: high to low"]
function MainProductPage() {
    const [curPage, setCurPage] = React.useState(1);
    const [productData, setProductData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [rank, setRank] = React.useState(1);
    const [curPageProductsData, setCurPageProductsData] = React.useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const role = useSelector(state => state.user.role);

    React.useEffect(() => {
        setLoading(true);
        getProducts()
            .then(products => {
                setProductData(products);
                setCurPageProductsData(products.slice(0, 10));
                setLoading(false);
                dispatch(setProducts(products));
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }, []);

    React.useEffect(() => {
        const data = [...productData];
        console.log("rank changed", rank);
        if (rank === 0) {
            data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (rank === 2) {
            data.sort((a, b) => b.price - a.price);
        }
        else {
            data.sort((a, b) => a.price - b.price);
        }
        setProductData(data);
        setCurPage(1);
        setCurPageProductsData(data.slice(0, 10));
    }, [rank]);

    const handlePageChange = (e, value) => {
        setCurPage(value);
        setCurPageProductsData(productData.slice((value - 1) * 10, value * 10));
    }

    const CustomIcon = () => {
        if (rank === 1) {
            return <ArrowDropUpIcon />;
        } else if (rank === 2) {
            return <ArrowDropDownIcon />;
        } else {
            return null;
        }
    };
    const handleAddProduct = () => {
        navigate(`/productcreate`);
    };
    return (
        <div className='content'>
            {/* top */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Grid container
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ xs: "column", sm: "row" }}>
                    <Grid item>
                        <Box sx={{ fontSize: "30px", fontFamily: "sans-serif", fontWeight: "600" }}>Products</Box>
                    </Grid>
                    <Grid item >
                        <ThemeProvider theme={menuTheme}>
                            <StyledFormControl>
                                <StyledSelect
                                    value={rank}
                                    IconComponent={CustomIcon}
                                    onChange={(e) => setRank(e.target.value)}
                                    color="primary"
                                    renderValue={(selected) => (OPTIONS[selected])}
                                >
                                    {OPTIONS.map((option, index) => (
                                        <MenuItem value={index} key={option}>
                                            <Box width={30}>{rank === index && <CheckIcon fontSize="xl3" />}</Box>
                                            <ListItemText primary={option} />
                                        </MenuItem>
                                    ))}
                                </StyledSelect>
                            </StyledFormControl>
                        </ThemeProvider>
                        {role === "Admin" && <Button variant="contained" onClick={handleAddProduct}>Add Product</Button>}
                    </Grid>
                </Grid>
            </div>
            {/* main */}
            <div style={{ flex: "1", backgroundColor: "white", padding: "20px", overflowY: "auto", margin: "20px 0" }}>
                {!loading ?
                    <ProductListPage productsData={curPageProductsData} />
                    :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 15, md: 25 }}>
                        {Array.from(Array(10)).map((_, index) => (
                            <Grid item xs={10} sm={5} md={5} key={index}>
                                <Box key={index} sx={{ marginRight: 0.5, my: 5, backgroundColor: "#f9fafb" }}>
                                    <Skeleton variant="rectangular" height={130} sx={{ backgroundColor: "#ccc" }} />
                                    <Box sx={{ pt: 0.5 }}>
                                        <Skeleton sx={{ backgroundColor: "#ccc" }} />
                                        <Skeleton width="60%" sx={{ backgroundColor: "#ccc" }} />
                                    </Box>
                                </Box>
                            </Grid>))}
                    </Grid>
                }
            </div>
            {/* pagination */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <StyledPagination count={Math.ceil(productData.length / 10)} shape="rounded" color="primary"
                    page={curPage}
                    onChange={handlePageChange} />
            </div>
        </div >

    )
}

export default MainProductPage