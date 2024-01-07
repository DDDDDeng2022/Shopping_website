import * as React from 'react';
import ProductListPage from './ProductListPage';
import { Pagination, Grid, Box, Skeleton, MenuItem, FormControl, Select, Button, ListItemText } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../../App.css"
/**
 * todo:
 * 1、创建商品页面的的具体信息，
 * 分成三个部分： 
 *              1、top: 包含标题，排序、添加等
 *              2、main: 展示每个商品，创建相关组件，可先创建一个商品的上市栏，进行复用
 *              3、bottom: Pagination
 * 2、DetailedProduct：待定
 * 3、DetailedCart:待定
 * 4、权限问题
 */

const StyledPagination = styled(Pagination)({
    display: "inline-flex",
    border: "1px #ccc solid",
    borderRadius: "5px",
    "& .MuiPaginationItem-root": {
        color: "#1976d2",
        margin: "0",
        borderRadius: "0",
        borderLeft: "1px #ccc solid",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
        color: "white",
    },
});
const StyledFormControl = styled(FormControl)({
    minWidth: "120px",
    '& .MuiSelect-select':
    {
        height: '40px',
        padding: "0",
        lineHeight: "40px",
        textAlign: "center"
    }
});
const StyledSelect = styled(Select)({
    '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
        paddingRight: 0,
    },
    color: "grey",
    border: "1px solid grey",
    width: "230px",
    padding: "0",
});

const menuTheme = createTheme({
    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'white',
                },

            },
        },
    },
});
function MainProductPage() {
    const [curPage, setCurPage] = React.useState(1);
    const [productData, setProductData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [rank, setRank] = React.useState(1);
    const [curPageProductsData, setCurPageProductsData] = React.useState([]);
    const OPTIONS = ["Last added", "Price: low to high", "Price: high to low"]
    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const product_json = await fetch('http://localhost:3000/api/product');
                const product_data = await product_json.json();
                product_data.sort((a, b) => a.price - b.price);
                setProductData(product_data);
                setCurPageProductsData(product_data.slice(0, 10));
                setLoading(false);
            }
            catch (err) { console.error('Error:', err); }
        }
        fetchProducts();
    }, []);
    React.useEffect(() => {
        const data = productData;
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
        setCurPageProductsData(productData.slice(0, 10));
    }, [rank]);
    const handlePageChange = (e, value) => {
        setCurPage(value);
        setCurPageProductsData(productData.slice((value - 1) * 10, value * 10));
    }
    const handleRankChange = (e) => {
        setRank(e.target.value);
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
                                    onChange={handleRankChange}
                                    color="primary"
                                    renderValue={(selected) => (
                                        OPTIONS[selected]
                                    )}
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
                        <Button variant="contained">Add Product</Button>
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