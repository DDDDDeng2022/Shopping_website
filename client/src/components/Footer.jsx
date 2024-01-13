import * as React from "react"
import { AppBar, IconButton, Typography, Button, Link, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Grid from "@mui/material/Unstable_Grid2";
import CloseIcon from '@mui/icons-material/Close';

/*
todo ：
    字体及相关样式尽量贴近figma
*/

const LINKS = ["Contact us", "Privacy Policies", "Help"];

export default function Footer() {
    const [openLinkDialog, setOpenLinkDialog] = React.useState(false);
    const [text, setText] = React.useState();
    const handleLinkEvent = (linkText) => {
        setText(linkText);
        setOpenLinkDialog(true);
    }
    const handleLinkEventClose = () => {
        setOpenLinkDialog(false);
        setText(null);
    }
    return (
        <AppBar position="static" sx={{
            padding: "10px 30px"
        }}>
            <Grid
                xs={12}
                container
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: "column", sm: "row" }}
                sx={{
                    fontSize: "12px"
                }}
            >
                <Grid sx={{ order: { xs: 3, sm: 1 } }}>
                    <Typography
                        variant="inherit"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            fontFamily: "monospace",
                            fontSize: {
                                xs: "0.4rem",
                                sm: "0.5rem",
                            }
                        }}
                    >
                        ©2022 All Rights Reserved.
                    </Typography>
                    {/* <Item>©2022 All Rights Reserved.</Item> */}
                </Grid>
                <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                    <Grid>
                        <Link href=" https://www.youtube.com/" color="inherit" underline="none" target="_blank">
                            <IconButton color="inherit"
                                sx={{
                                    padding: {
                                        xs: "5px",
                                        sm: "8px"
                                    }
                                }}>
                                <YouTubeIcon sx={{
                                    fontSize: {
                                        xs: "20px",
                                        sm: "25px"
                                    }
                                }}
                                />
                            </IconButton>
                        </Link>
                    </Grid>

                    <Grid>
                        <Link href=" https://www.twitter.com/" color="inherit" underline="none" target="_blank">
                            <IconButton color="inherit"
                                sx={{
                                    padding: {
                                        xs: "5px",
                                        sm: "8px"
                                    }
                                }}>
                                <TwitterIcon sx={{
                                    fontSize: {
                                        xs: "20px",
                                        sm: "25px"
                                    }
                                }} />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link href=" https://www.facebook.com/" color="inherit" underline="none" target="_blank">
                            <IconButton color="inherit"
                                sx={{
                                    padding: {
                                        xs: "5px",
                                        sm: "8px"
                                    }
                                }}>
                                <FacebookIcon sx={{
                                    fontSize: {
                                        xs: "20px",
                                        sm: "25px"
                                    }
                                }} />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={1} sx={{ order: { xs: 2, sm: 3 } }}>
                    {LINKS.map((page) => (
                        // eslint-disable-next-line react/jsx-key
                        <Grid key={page}>
                            <Button
                                sx={{
                                    fontSize: {
                                        xs: "0.4rem",
                                        sm: "0.5rem",
                                    },
                                    color: "white",
                                    whiteSpace: "nowrap",
                                    textTransform: "none",
                                    minWidth: "max-content",
                                }}
                                onClick={() => handleLinkEvent(page)}
                            >
                                {page}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <LinkDialog text={text} openLinkDialog={openLinkDialog} handleLinkEventClose={handleLinkEventClose} />

        </AppBar>
    );
}

const LinkDialog = (props) => {
    const { text, openLinkDialog, handleLinkEventClose } = props
    return (
        <Dialog
            onClose={handleLinkEventClose}
            open={openLinkDialog}>
            <DialogTitle>
                {text}
            </DialogTitle>
            <IconButton
                onClick={handleLinkEventClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <DialogContentText>
                    Reminder: This is a link to "{text}" page.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}