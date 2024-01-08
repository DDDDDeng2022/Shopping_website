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
    Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

export const EmailBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { validEmail, validateEmail } = props;
    return (
        <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
            color="secondary"
        >
            {/* <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel> */}
            <OutlinedInput
                id="outlined-adornment-email"
                onChange={validateEmail}
                placeholder="you@email.com"
                type="text"
                // label="Email"
                error={!validEmail}
                helperText="Invalid Email"
            />
        </FormControl>
    );
};

export const PasswordBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { showPassword, handleClickShowPassword, handleMouseDownPassword } =
        props;
    return (
        <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
            color="secondary"
        >
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
    const [validEmail, setValidEmail] = useState(false);
    const box_theme = createTheme({
        palette: {
            primary: {
                main: "#FFFFFF",
            },
            secondary: {
                main: "#5048E5",
            },
        },
    });

    const handleSignIn = () => {};

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateEmail = () => {
        
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
                        p: 2,
                        m: 1,
                        textAlign: "center",
                        fontSize: "1rem",
                        margin: "auto",
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

                    <Grid
                        container
                        spacing={2}
                        justifyContent="space-evenly"
                        justifyItems="center"
                        alignItems="stretch"
                        flexDirection="row"
                        className="loginContent"
                    >
                        <Grid item xs={10}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "24px",
                                        sm: "34px",
                                    },
                                    fontWeight: "700",
                                    marginBottom: {
                                        sm: "20px",
                                        md: "30px",
                                    },
                                }}
                                noWrap
                                component="div"
                            >
                                Sign in to your account
                            </Typography>
                        </Grid>
                        <Grid container xs={10} className="email">
                            <Grid item xs="auto">
                                <Typography fontSize="16px" fontWeight="400">
                                    Email
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <EmailBar validEmail={validEmail} validateEmail={validateEmail} />
                            </Grid>
                        </Grid>
                        <Grid container xs={10} className="password">
                            <Grid item xs="auto">
                                <Typography fontSize="16px" fontWeight="400">
                                    Password
                                </Typography>
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
                        <Grid
                            item
                            xs={10}
                            className="signIn"
                            sx={{ marginBottom: "5px" }}
                        >
                            <Button
                                fullWidth
                                color="secondary"
                                variant="contained"
                                onClick={handleSignIn}
                            >
                                Sign In
                            </Button>
                        </Grid>
                        <Grid
                            xs={9}
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection={{ xs: "column", sm: "row" }}
                            sx={{ fontSize: "14px" }}
                        >
                            <Grid>
                                <Typography variant="inherit" noWrap>
                                    Don&#39;t have an account?{" "}
                                    <Link color="#5048E5" href="">
                                        Sign Up
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid>
                                <Grid>
                                    <Link color="#5048E5" href="">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}
