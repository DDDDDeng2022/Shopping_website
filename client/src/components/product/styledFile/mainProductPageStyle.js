
import { Pagination, FormControl, Select } from '@mui/material';
import { styled, createTheme, } from '@mui/material/styles'

export const menuTheme = createTheme({
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


export const StyledPagination = styled(Pagination)({
    display: "inline-flex",
    border: "1px #ccc solid",
    borderRadius: "5px",
    "& .MuiPaginationItem-root": {
        color: "#5048E5",
        margin: "0",
        borderRadius: "0",
        borderLeft: "1px #ccc solid",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
        color: "white",
    },
});
export const StyledFormControl = styled(FormControl)({
    minWidth: "120px",
    '& .MuiSelect-select':
    {
        height: '40px',
        padding: "0",
        lineHeight: "40px",
        textAlign: "center"
    }
});
export const StyledSelect = styled(Select)({
    '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
        paddingRight: 0,
    },
    color: "grey",
    border: "1px solid grey",
    width: "230px",
    padding: "0",
});