import { useState } from "react";
import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Button,
    FormControl,
    IconButton,
    Link,
    InputLabel,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

export const EmailBar = (props) => {
    const {} = props;
    return <FormControl></FormControl>;
};

export const PasswordBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
        props;
    return (
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
                Password
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    );
};

export default function App() {
    const [showPassword, setShowPassword] = useState(false);
    const box_theme = createTheme({
        palette: {
            primary: {
                main: "#FFFFFF",
            },
            shadow: {},
        },
    });

    const handleSignIn = () => {};

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="content">
            <ThemeProvider theme={box_theme}>
                {/* Change to dialog, signin - signup  */}
                <Box
                    sx={{
                        boxSizing: "border-box",
                        width: {
                            sm: "100%",
                            md: "50%",
                            lg: "600px",
                        },
                        height: "528px",
                        borderRadius: "10px",
                        boxShadow: 3,
                        bgcolor: "primary.main",
                        p: 2,
                        m: 1,
                        textAlign: "center",
                        fontSize: "1rem",
                        fontWeight: "700",
                        position: "relative",
                        margin: "auto",
                        // flexGrow: 1,
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

                    <Grid container className="loginContent">
                        <Grid item xs={12} className="loginHeader">
                            Sign in to your account
                        </Grid>
                        <Grid item xs={12} className="email">
                            <Grid item xs={2}>
                                Email
                            </Grid>
                            <Grid item xs={12}>
                                <input className="emailBox" />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className="password">
                            <Grid item xs={2}>
                                Password
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordBar
                                    handleClickShowPassword={
                                        handleClickShowPassword
                                    }
                                    handleMouseDownPassword={
                                        handleMouseDownPassword
                                    }
                                    showPassword={showPassword}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className="signIn">
                            <Button variant="contained">Sign In</Button>
                        </Grid>
                        <Grid item xs={12} className="loginOthers">
                            {/* material ui Grid */}
                            <div className="noAccount">
                                <span>{"Don't have an account? "}</span>
                                <Link href="">Sign Up</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}
