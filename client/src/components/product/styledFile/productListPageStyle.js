
import { Button, Typography, Box, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles'
export const StyledTypography = styled(Typography)({
    color: "grey",
    fontSize: "15px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
});
export const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: '4px'

});
export const StyledButtonGroup = styled(ButtonGroup)({
    "& .MuiButtonGroup-grouped": {
        border: "none",
        "&:not(:last-of-type)": {
            borderRight: "none",
        },
    }
});
export const StyledButton = styled(Button)({
    "&.Mui-disabled": {
        backgroundColor: "#5048E5",
        color: "white",
    },
});