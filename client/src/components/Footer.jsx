import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Grid from "@mui/material/Unstable_Grid2";
import Link from '@mui/material/Link';
const pages = ["Contact us", "Privacy Policies", "Help"];

/*
todo ：
    1、YouTube、Twitter和Facebook添加点击事件，跳转到官网，跳转时采用_blank方式
    2、三个按钮"Contact us", "Privacy Policies", "Help"添加点击事件
    3、字体及相关样式尽量贴近figma
*/
export default function Footer() {
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
                            fontSize: "0.5rem",
                        }}
                    >
                        ©2022 All Rights Reserved.
                    </Typography>
                    {/* <Item>©2022 All Rights Reserved.</Item> */}
                </Grid>

                <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                    <Grid>
                        <Link href=" https://www.youtube.com/" color="inherit" underline="none" target="_blank">
                            <IconButton color="inherit">
                                <YouTubeIcon fontSize="small" />
                            </IconButton>
                        </Link>
                    </Grid>

                    <Grid>
                        <Link href=" https://www.twitter.com/" color="inherit" underline="none" target="_blank">
                            <IconButton color="inherit">
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link href=" https://www.facebook.com/" color="inherit" underline="none" target="_blank">
                            <IconButton color="inherit">
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>

                <Grid container columnSpacing={1} sx={{ order: { xs: 2, sm: 3 } }}>
                    {pages.map((page) => (
                        // eslint-disable-next-line react/jsx-key
                        <Grid key={page}>
                            <Button
                                sx={{
                                    fontSize: "0.5rem",
                                    color: "white",
                                    whiteSpace: "nowrap",
                                    textTransform: "none",
                                    minWidth: "max-content",
                                }}
                            >
                                {page}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </AppBar>
    );
}
