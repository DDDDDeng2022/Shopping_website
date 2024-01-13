import Box from "@mui/system/Box";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function ErrorHandlePage() {
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

    return (
        <div className="errorBox">
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
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        justifyContent="space-evenly"
                        justifyItems="center"
                        flexDirection="row"
                    >
                        <Grid item xs={10}>
                            <Typography variant="h3">404</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
}
