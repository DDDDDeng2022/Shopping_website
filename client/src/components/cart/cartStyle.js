import { styled, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
    fontFamily: "sans-serif",
    color: "black",
    fontSize: "14px",
    position: "fixed",
    zIndex: "9999",
    backgroundColor: "white",
    [theme.breakpoints.up('sm')]: {
        top: 0,
        right: 0,
        transform: 'translate(0, 0)',
        width: "450px",

    },
    [theme.breakpoints.down('sm')]: {
        top: '49%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
    },
}));
export const FlexedBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box"
});

export const cartTheme = createTheme({
    palette: {
        primary: {
            main: "#5048E5",
        },
    },
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    '.MuiButtonGroup-grouped': {
                        minWidth: "30px",
                        borderColor: "#bbb8b8",
                        padding: "0",
                        fontSize: "15px"
                    },
                }
            }
        }, MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: 6,
                    fontSize: "14px",
                    "&.Mui-disabled": {
                        color: "black",
                        border: "1px solid #bbb8b8"
                    },
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: "8px",
                        fontSize: "14px",
                    },
                },
            },
        },
    },
});

export const SecondBox = styled(Box)({
    position: "fixed",
    zIndex: "9998",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});