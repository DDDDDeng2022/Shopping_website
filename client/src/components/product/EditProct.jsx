import * as React from 'react';
import { InputBase, TextField, MenuItem, Input, FormHelperText, InputAdornment, OutlinedInput, FormControl, InputLabel, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Skeleton, ButtonGroup, backdropClasses } from '@mui/material';
// import InputContainer from './InputContainer';
import { useParams } from 'react-router-dom';
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";

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


export function ParoductEdit() {
    let { id } = useParams();
    const [checkStatus, setCheckStatus] = React.useState(false);
    console.log("id: ", id);
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

            Create Product
        </Box>
        <ThemeProvider theme={theme}>
            <Div >
                <InputContainer title="Product name">
                    <TextField
                        fullWidth
                        hiddenLabel
                        sx={{ padding: 0 }}
                    />
                </InputContainer>
                <InputContainer title="Product Description">
                    <TextField
                        fullWidth
                        hiddenLabel
                        multiline
                        rows={3}
                        defaultValue="Default Value"

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
                            <TextField hiddenLabel />
                        </InputContainer>
                    </Grid>
                </Grid>
                <Grid container spacing={1} columns={{ xs: 4, sm: 11 }} >
                    <Grid item xs={4} sm={4} >
                        <InputContainer title="In Stock Quanity">
                            <TextField fullWidth hiddenLabel />
                        </InputContainer>
                    </Grid>
                    <Grid item xs={4} sm={7} >
                        <InputContainer title="Add Image Link">
                            <FormControl variant="outlined">
                                <OutlinedInput
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
                <div><Button variant="contained">Add Product</Button></div>
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
export default ParoductEdit


{/* 
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>Product name</div>
                    <TextField fullWidth hiddenLabel sx={{ border: "grey" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>Product Description</div>
                    <TextField
                        fullWidth
                        hiddenLabel
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>Category</div>
                        <TextField select defaultValue="category1">
                            {categories.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>Price</div>
                        <TextField hiddenLabel />
                    </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>In Stock Quanity</div>
                        <TextField fullWidth hiddenLabel />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>Add Image Link</div>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button variant="contained">Upload</Button>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div> */}