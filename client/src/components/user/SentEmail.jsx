import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function App() {
    const box_theme = createTheme({
        palette: {
            primary: {
                main: "#FFFFFF",
                black: "#000000",
            },
            secondary: {
                main: "#5048E5",
            },
        },
    });

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
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="row"
                            className="loginContent"
                        >
                            <Grid
                                container
                                display="flex"
                                justifyContent="center"
                            >
                                <Grid
                                    item
                                    xs={10}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: "10px"
                                    }}
                                >
                                    <IconButton sx={{ pointerEvents: "none" }}>
                                        <ForwardToInboxIcon
                                            sx={{
                                                fontSize: 70,
                                                color: "secondary.main",
                                            }}
                                        />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "main.black",
                                    }}
                                    // noWrap
                                    component="div"
                                >
                                    We have sent the update password link to
                                    your email, please check that !
                                </Typography>
                            </Grid>
                        </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}
