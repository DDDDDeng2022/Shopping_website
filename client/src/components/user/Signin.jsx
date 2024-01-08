import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FormControl, IconButton } from "@mui/material";

export const EmailBar = (props) => {
    return <FormControl></FormControl>;
};

export const PasswordBar = (props) => {};

export default function App() {
    const box_theme = createTheme({
        palette: {
            primary: {
                main: "#FFFFFF",
            },
            shadow: {},
        },
    });

    return (
        <ThemeProvider theme={box_theme}>
            <Box
                sx={{
                    boxSizing: "border-box",
                    width: 600,
                    height: 528,
                    borderRadius: "10px",
                    boxShadow: 3,
                    bgcolor: "primary.main",
                    p: 2,
                    m: 1,
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: "700",
                    position: "relative",
                }}
            >
                <IconButton
                        edge="end"
                        sx={{
                            // flexGrow: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            // flexDirection: "column-reverse",
                            float: "right",
                        }}
                    >
                        <CloseIcon fontSize="40px" />
                </IconButton>
                <div className="loginContent">
                    <div className="loginHeader">Sign in to your account</div>
                    <div className="email">Email</div>
                    <div className="password">Password</div>
                </div>
            </Box>
        </ThemeProvider>
    );
}
