import { useState } from "react";
import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    Button,
    FormControl,
    IconButton,
    Typography,
    FormHelperText,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";

const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// copied from stackoverflow

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
                    sx={{ display: "flex", justifyContent: "flex-end", marginRight: 0 }}
                >
                    Invalid Email input!
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default function App() {
    const [validEmail, setValidEmail] = useState(true);

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

    const handleClick = () => {};

    const validateEmail = (event) => {
        const curr_email = event.target.value;
        if (curr_email.match(EMAIL_REGEX)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
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
                        height: "400px",
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
                                Update your password
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "10px",
                                        sm: "14px",
                                    },
                                    fontWeight: "400",
                                    color: "#6B7280",
                                    marginBottom: {
                                        sm: "20px",
                                        md: "30px",
                                    },
                                }}
                                // noWrap
                                component="div"
                            >
                                Enter your email link, we will send you the recovery link
                            </Typography>
                        </Grid>
                        <Grid container xs={10} className="email">
                            <Grid item xs="auto">
                                <Typography fontSize="16px" fontWeight="400">
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
                            item
                            xs={10}
                            className="signIn"
                            sx={{ marginTop: 2, marginBottom: 1 }}
                        >
                            <Button
                                fullWidth
                                color="secondary"
                                variant="contained"
                                onClick={handleClick}
                            >
                                Update Password
                            </Button>
                        </Grid>
                        
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}
