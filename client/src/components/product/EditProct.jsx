import * as React from 'react';
import { TextField, MenuItem, InputAdornment, OutlinedInput, FormControl, Button, Typography, Grid, Box } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { useLocation } from 'react-router-dom';
import { updateProduct, addProduct, deleteProduct, uploadImage } from './productApi';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useNavigate } from 'react-router-dom';
import { productEditTheme, Div, VisuallyHiddenInput } from './styledFile/productEditStyle';
import { getCategories } from './categoryApi';

export function ProductEdit() {
    const location = useLocation();
    const product = location.state?.product;
    const type = product ? "save" : "addProduct";
    const [productName, setProductName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [photoLink, setPhotoLink] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [categories, setCategories] = React.useState([{ id: "", name: "" }]);
    const findCategoryById = (categories, id) => {
        const category = categories.find(category => category.id.toString() === id);
        return category ? { id: id, name: category.name } : null;
    }
    const navigate = useNavigate();
    React.useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories(fetchedCategories);
                if (product) {
                    const matchedCategory = findCategoryById(fetchedCategories, product.category);
                    setCategory(matchedCategory || (fetchedCategories.length > 0 ? fetchedCategories[0] : { id: '', name: '' }));
                } else {
                    setCategory(fetchedCategories.length > 0 ? fetchedCategories[0] : { id: '', name: '' });
                }
                setProductName(product ? product.name : "");
                setDescription(product ? product.description : "");
                setPrice(product ? product.price : "");
                setQuantity(product ? product.quantity : "");
                setPhotoLink(product ? product.link : "http://");
            } catch (err) {
                console.error('Fetch error:', err);
            }
        };
        fetchCategories();
    }, [])

    const handleSubmit = async () => {
        if (productName === "" || price === "" || quantity === "" || photoLink === "http://") {
            setShowError(true);
            alert("Submission failed! (Incomplete Product Information!)");
            return;
        }
        const newProductData = {
            name: productName,
            description: description,
            price: Number(price),
            quantity: Number(quantity),
            category: category.id,
            link: photoLink
        };
        try {
            setLoading(true);
            if (type === "save") {
                const updatedProduct = await updateProduct(product._id, newProductData);
                console.log("update successfully: ", updatedProduct);
            }
            else {
                const updatedProduct = await addProduct(newProductData);
                console.log("product successfully added : ", updatedProduct);
            }
            alert(`${type} successfully!`);


        } catch (err) {
            console.error('Update failed:', err);
        } finally {
            setLoading(false);
            setShowError(false);
        }
    }
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const imageUrl = await uploadImage(file);
                setPhotoLink(imageUrl);
            } catch (error) {
                console.error('Upload error:', error);
            }
        }
    };
    const handleDelete = async () => {
        try {
            alert(`product ${productName}: ${product._id}will be deleted.`)
            await deleteProduct(product._id);
            console.log("delete successfully");
            navigate(`/`);
        } catch (err) {
            console.error('delete failed:', err);
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
        <ThemeProvider theme={productEditTheme}>
            <Div >
                <InputContainer title="Product name">
                    <TextField
                        fullWidth
                        hiddenLabel
                        sx={{ padding: 0 }}
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        error={productName === "" && showError}
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
                            <TextField select
                                value={category ? category.name : ''}
                                onChange={(e) => {
                                    const selectedCategory = categories.find(cat => cat.name === e.target.value);
                                    setCategory(selectedCategory || { id: '', name: '' });
                                }}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.name}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </InputContainer>
                    </Grid>
                    <Grid item xs={4} sm={6} >
                        <InputContainer title="Price">
                            <TextField hiddenLabel value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                error={price === "" && showError}
                                type="number"
                                inputProps={{ min: "0" }} />
                        </InputContainer>
                    </Grid>
                </Grid>
                <Grid container spacing={1} columns={{ xs: 4, sm: 11 }} >
                    <Grid item xs={4} sm={4} >
                        <InputContainer title="In Stock Quatity">
                            <TextField fullWidth hiddenLabel
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                error={quantity === "" && showError}
                                type="number"
                                inputProps={{ min: "0" }} />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={4} sm={7} >
                        <InputContainer title="Add Image Link">
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    value={photoLink}
                                    onChange={(e) => setPhotoLink(e.target.value)}
                                    error={photoLink === "http://" && showError}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button variant="contained"
                                                component="label"
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
                                            >
                                                Upload
                                                <VisuallyHiddenInput type="file" accept="image/*" onChange={handleUpload} />
                                            </Button>
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
                    borderRadius: "4px",
                    margin: "auto",
                    width: {
                        xs: "100%",
                        sm: "70%"
                    },
                    height: "120px",

                }}>
                    {
                        photoLink === "http://" ?
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <ImageOutlinedIcon color="disabled" fontSize='large' />
                                <Typography sx={{ color: "grey", fontSize: "16px" }} >image preview!</Typography>
                            </Box>
                            : <img src={photoLink} alt="Input" style={{ width: '100%', maxHeight: '118px' }} />

                    }
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: {
                        xs: "center",
                        sm: "flex-start"
                    },
                    gap: "20px"
                }}>

                    <Button variant="contained" onClick={handleSubmit} disabled={loading}> {type}</Button>
                    {type === "save" &&
                        <Button variant="contained" onClick={handleDelete} disabled={loading}> deleteProduct</Button>
                    }
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
