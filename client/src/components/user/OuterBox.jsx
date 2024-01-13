import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";

import './dialog.css';

export const box_theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            secondary: "#6B7280",
        },
        secondary: {
            main: "#5048E5",
        },
    },
});

// eslint-disable-next-line react/prop-types
export const OuterBox = ({ children }) => {
    return <div className="content">
        <ThemeProvider theme={box_theme}>
            <Box sx={{
                boxSizing: "border-box",
                width: {
                    xs: "100%",
                    md: "600px",
                },
                height: "500px",
                borderRadius: "10px",
                boxShadow: 3,
                margin: "auto",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"
            }}>
                <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
                    <CloseIcon fontSize="40px" />
                </IconButton>
                {children}
            </Box>
        </ThemeProvider>
    </div >
}
export default OuterBox;