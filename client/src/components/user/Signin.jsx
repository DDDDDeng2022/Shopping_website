import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, FormControl, IconButton, Link } from "@mui/material";

export const EmailBar = (props) => {
    return <FormControl></FormControl>;
};

export const PasswordBar = (props) => {};

export default function App() {
    // const box_theme = createTheme({
    //     palette: {
    //         primary: {
    //             main: "#FFFFFF",
    //         },
    //         shadow: {},
    //     },
    // });

    const handleSignIn = () => {

    };

    return (
        <div className="content">
            {/* <ThemeProvider theme={box_theme}> */}
            {/* Change to dialog, signin - signup  */}
                <Box
                    sx={{
                        boxSizing: "border-box",
                        // width: 600,
                        width: {
                            sm: "100%",
                            md: "50%",
                            lg: "600px"
                        },
                        height: 528,
                        borderRadius: "10px",
                        boxShadow: 3,
                        // bgcolor: "primary.main",
                        p: 2,
                        m: 1,
                        textAlign: "center",
                        fontSize: "1rem",
                        fontWeight: "700",
                        position: "relative",
                        margin: "auto"
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
                        <div className="email">
                            Email
                            <input className="emailBox" />
                        </div>
                        <div className="password">
                            Password
                            <input className="passwordBox" />
                        </div>
                        <div className="signIn">
                            <Button variant="contained">Sign In</Button>
                        </div>
                        <div className="loginOthers">
                            {/* material ui Grid */}
                            <div className="noAccount">
                                <span>{"Don't have an account? "}</span>
                                <Link href="">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </Box>
            {/* </ThemeProvider> */}
        </div>
    );
}
