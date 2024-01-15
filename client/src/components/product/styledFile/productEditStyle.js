import { styled, createTheme } from "@mui/material/styles";


export const productEditTheme = () => {
    const baseTheme = createTheme();
    return createTheme({
        ...baseTheme,
        palette: {
            primary: {
                main: "#5048E5",
            },
        },
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
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontSize: "14px",
                    }
                }
            },
        },
    }
    );
}
export const Div = styled("div")(({ theme }) => ({
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

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
