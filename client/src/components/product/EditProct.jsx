import * as React from 'react';
import { InputBase, TextField, MenuItem, Input, FormHelperText, InputAdornment, OutlinedInput, FormControl, InputLabel, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, Skeleton, ButtonGroup, backdropClasses } from '@mui/material';

import { styled } from '@mui/material/styles'
import { useParams } from 'react-router-dom';
const Div = styled("div")(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        width: "100%",
        // padding: "20px",
    },
    [theme.breakpoints.up('md')]: {
        width: "50%",
        // padding: "40px"
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
const categories = ["category1", "category2", "category3"];
export function ParoductEdit() {
    let { id } = useParams();
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
    return <div className='content' style={{ alignItems: "center" }}>
        <Div >
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <div>
                    Product name
                    <TextField fullWidth hiddenLabel sx={{ border: "grey" }} />
                </div>
                <div>
                    Product Description
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
                        Category
                        <TextField select defaultValue="category1">
                            {categories.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        Price
                        <TextField hiddenLabel />
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            In Stock Quanity
                            <TextField fullWidth hiddenLabel />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            Add Image Link
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button variant="contained">Upload</Button>
                                        </InputAdornment>
                                    }
                                />
                                {/* <FormHelperText>helper text</FormHelperText> */}
                            </FormControl>
                        </div>
                    </div>
                </div>
            </Box>
        </Div >
    </div>
}

export default ParoductEdit
