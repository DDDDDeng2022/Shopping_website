import { useState } from "react";
import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Button,
    FormControl,
    IconButton,
    Link,
    Typography,
    FormHelperText,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// copied from stackoverflow
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;
// This regex means at least 1 lowercase, at least 1 uppercase, at least 1 digits(number), and no space at least 8 characters

export const EmailBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { validEmail, validateEmail } = props;
    return (
        <FormControl
            sx={{ marginTop: 1, width: "100%" }}
            variant="outlined"
            color="secondary"
        >
            <OutlinedInput
                id="outlined-adornment-email"
                onChange={(event) => validateEmail(event)}
                placeholder="you@email.com"
                type="email"
                error={!validEmail}
            />
            {!validEmail && (
                <FormHelperText
                    error
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: 0,
                    }}
                >
                    Invalid Email input!
                </FormHelperText>
            )}
        </FormControl>
    );
};

export const PasswordBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { showPassword, handleClickShowPassword, handleMouseDownPassword, validPassword, validatePassword } = props;
    return (
        <FormControl
            sx={{ marginTop: 1, width: "100%" }}
            variant="outlined"
            color="secondary"
        >
            <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={(event) => {
                    validatePassword(event);
                }}
                error={!validPassword}
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
            />
            {!validPassword && (
                <FormHelperText
                    error
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: 0,
                    }}
                >
                    Invalid password input!
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default function App() {
    const [showPassword, setShowPassword] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const box_theme = createTheme({
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

    const handleSignIn = () => {};

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateEmail = (event) => {
        const curr_email = event.target.value;
        if (curr_email.match(EMAIL_REGEX)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    const validatePassword = (event) => {
        const curr_password = event.target.value;
        if (curr_password.match(PASSWORD_REGEX)) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    };

    return (
        <div className="content">
            <ThemeProvider theme={box_theme}>
                <Box
                    sx={{
                        boxSizing: "border-box",
                        width: {
                            sm: "100%",
                            md: "600px",
                        },
                        height: "528px",
                        borderRadius: "10px",
                        boxShadow: 3,
                        p: 2,
                        m: 1,
                        textAlign: "center",
                        fontSize: "1rem",
                        margin: "auto",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10
                        }}
                    >
                        <CloseIcon fontSize="40px" />
                    </IconButton>

                    <Grid
                        container
                        direction="column"
                        justifyContent="space-evenly"
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
                                // noWrap
                                component="div"
                            >
                                Sign up an account
                            </Typography>
                        </Grid>
                        <Grid container xs={10} className="email">
                            <Grid item xs="auto">
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: "primary.secondary",
                                    }}
                                >
                                    Email
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <EmailBar
                                    validEmail={validEmail}
                                    validateEmail={validateEmail}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            xs={10}
                            className="password"
                            sx={{ marginTop: 2 }}
                        >
                            <Grid item xs="auto">
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        color: "primary.secondary",
                                    }}
                                >
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
                                    validPassword={validPassword}
                                    validatePassword={validatePassword}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            className="signIn"
                            sx={{ marginTop: 2, marginBottom: 1 }}
                        >
                            <Button
                                fullWidth
                                color="secondary"
                                variant="contained"
                                onClick={handleSignIn}
                            >
                                Create account
                            </Button>
                        </Grid>
                        <Grid
                            xs={10}
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection={{ xs: "column", sm: "row" }}
                            sx={{ fontSize: "14px" }}
                        >
                            <Grid>
                                <Typography
                                    variant="inherit"
                                    noWrap
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        color: "primary.secondary",
                                    }}
                                >
                                    Already have an account?{" "}
                                    <Link
                                        color="#5048E5"
                                        href=""
                                        sx={{ fontWeight: "500" }}
                                    >
                                        Sign in
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}
