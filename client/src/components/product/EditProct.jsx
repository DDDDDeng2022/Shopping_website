import * as React from 'react';
import { InputBase, TextField, MenuItem, Input, FormHelperText, InputAdornment, OutlinedInput, FormControl, InputLabel, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Skeleton, ButtonGroup, backdropClasses } from '@mui/material';
// import InputContainer from './InputContainer';
import { useParams } from 'react-router-dom';
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { useLocation } from 'react-router-dom';
import { updateProduct, addProduct } from './productApi';
const Div = styled("div")(({ theme }) => ({
    [theme.breakpoints.down('xs')]: {
        width: "100%",
        padding: "20px",
    },
    [theme.breakpoints.up('sm')]: {
        width: "50%",
        maxWidth: "600px",
        padding: "20px 40px",
        minWidth: "400px"
    },
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    boxSizing: "border-box"

}));

const categories = ["category1", "category2", "category3"];
const theme = () => {
    const baseTheme = createTheme();
    return createTheme({
        ...baseTheme,
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-input': {
                            padding: "5px",
                            fontSize: "12px",
                            [baseTheme.breakpoints.up('sm')]: {
                                fontSize: "16px",
                            },
                        },
                        '& .MuiInputBase-multiline': {
                            padding: "5px",
                            fontSize: "12px",
                            [baseTheme.breakpoints.up('sm')]: {
                                fontSize: "16px"
                            },
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-input': {
                            color: 'black',
                            padding: "5px",
                            fontSize: "14px",
                            [baseTheme.breakpoints.up('sm')]: {
                                fontSize: "16px",
                            },
                        },

                    },
                },
            }
        },
    }
    );
}


export function ProductEdit() {
    const location = useLocation();
    const product = location.state?.product;
    const type = product ? "save" : "addProduct";
    const [productName, setProductName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [price, setPrice] = React.useState();
    const [quantity, setQuantity] = React.useState();
    const [photoLink, setPhotoLink] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setProductName(product ? product.name : "");
        setDescription(product ? product.description : "");
        setPrice(product ? product.price : "");
        setQuantity(product ? product.quantity : "");
        setPhotoLink(product ? product.link : "");
    }, [])

    const handleSubmit = async () => {
        const newProductData = {
            name: productName,
            description: description,
            price: Number(price),
            quantity: Number(quantity),
            photo_link: photoLink
        };
        console.log("newProductData: ", newProductData);
        try {
            setLoading(true);
            if (type === "save") {
                const updatedProduct = await updateProduct(product._id, newProductData);
                console.log("update successfully: ", updatedProduct);
            }
            else {
                const updatedProduct = await addProduct(newProductData);
                console.log("update successfully: ", updatedProduct);
            }


        } catch (err) {
            console.error('Update failed:', err);
        } finally {
            setLoading(false);
        }
    }
    return <div className='content' style={{ alignItems: 'center' }}>
        <Box sx={{
            fontFamily: "sans-serif",
            fontWeight: "600",
            marginBottom: "20px",
            fontSize: {
                xs: "25px",
                sm: "30px"
            },
            width: {
                xs: "100%",
                sm: "50%"
            },
            minWidth: "400px",
            maxWidth: "600px",
            textAlign: {
                xs: "center",
                sm: "left"
            }
        }}>

            {product ? "Edit Product" : "Create Product"}
        </Box>
        <ThemeProvider theme={theme}>
            <Div >
                <InputContainer title="Product name">
                    <TextField
                        fullWidth
                        hiddenLabel
                        sx={{ padding: 0 }}
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}

                    />
                </InputContainer>
                <InputContainer title="Product Description">
                    <TextField
                        fullWidth
                        hiddenLabel
                        multiline
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </InputContainer>
                <Grid container spacing={1} columns={{ xs: 4, sm: 12 }} >
                    <Grid item xs={4} sm={6} >
                        <InputContainer title="Category">
                            <TextField select defaultValue="category1">
                                {categories.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </InputContainer>
                    </Grid>
                    <Grid item xs={4} sm={6} >
                        <InputContainer title="Price">
                            <TextField hiddenLabel value={price}
                                onChange={(e) => setPrice(e.target.value)} />
                        </InputContainer>
                    </Grid>
                </Grid>
                <Grid container spacing={1} columns={{ xs: 4, sm: 11 }} >
                    <Grid item xs={4} sm={4} >
                        <InputContainer title="In Stock Quanity">
                            <TextField fullWidth hiddenLabel
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)} />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={4} sm={7} >
                        <InputContainer title="Add Image Link">
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    value={photoLink}
                                    onChange={(e) => setPhotoLink(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button variant="contained"
                                                sx={{
                                                    minWidth: "fit-content",
                                                    padding: {
                                                        xs: "3px 5px",
                                                        sm: "5px 8px"
                                                    },
                                                    fontSize: {
                                                        xs: "6px",
                                                        sm: "8px"
                                                    }
                                                }}
                                            >Upload</Button>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </InputContainer>
                    </Grid>
                </Grid>
                {/* 图片链接 */}
                <Box sx={{
                    border: '2px dashed #ddd',
                    margin: "auto",
                    width: {
                        xs: "100%",
                        sm: "70%"
                    },
                    height: "120px"
                }}>
                    {/* <img src= alt="Input" style={{ maxWidth: '100%', maxHeight: '300px' }} /> */}
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: {
                        xs: "center",
                        sm: "flex-start"
                    }
                }}>
                    <Button variant="contained" onClick={handleSubmit} disabled={loading}> {type}</Button>
                </Box>


            </Div >
        </ThemeProvider>
    </div >

}

const InputContainer = ({ title, children }) => {
    return <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "8px" }}>
        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "12px" }}>{title}</div>
        {children}
    </div>
}
export default ProductEdit
