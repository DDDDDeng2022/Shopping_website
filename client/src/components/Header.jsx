import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cart from "./cart/CartDialog";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../services/apiCall";
import { setIsLogin } from "../redux/loginStateSlice";
import { resetUser } from "../redux/userSlice";

/**
 * todo:
 * 1、management和chuwa使用的component有待更改，使其贴近上下错位分布
 * 2、关于searchBar可以考虑能否使用Grid去进行调整
 */

export const SearchBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { isSearchWrap } = props;
    return (
        <FormControl
            sx={{
                flexGrow: 1,
                display: {
                    xs: isSearchWrap ? "block" : "none",
                    sm: isSearchWrap ? "none" : "block",
                },
            }}
        >
            <OutlinedInput
                sx={{
                    backgroundColor: "white", width: "100%", color: "grey",
                    '& .MuiInputBase-input': {
                        padding: {
                            xs: "5px",
                            sm: "10px"
                        },
                        fontSize: {
                            xs: "15px",
                            sm: "20px"
                        }
                    }
                }}
                id="search"
                type={"text"}
                size="small"
                placeholder="Search"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => {
                                console.log("todo");
                            }}
                            edge="end"
                        >
                            <SearchOutlinedIcon sx={{
                                color: "grey",
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px"
                                }
                            }} />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};
  

export default function Header() {
    const [openCartDialog, setOpenCartDialog] = useState(false);
    const isLogin = useSelector((state) => state.isLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        if (isLogin) {
            dispatch(setIsLogin(false));
            dispatch(resetUser());
        } else {
            navigate("/signin");
        }
    };
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            const response = apiCall({ url: '/api/auth/checkLogin', method: 'GET', data: {token: storedToken} });
            if (response.ok && response.json().success) {
                dispatch(setIsLogin(true));
            }
        }
    }, []);
    const handleOpenCartDialog = () => {
        setOpenCartDialog(!openCartDialog);
        console.log("open dialog");
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#101827" }}>
            <Toolbar sx={{
                minHeight: {
                    xs: "30px",
                    sm: "60px"
                }
            }} >
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    Management
                </Typography>
                <Typography
                    component="div"
                    sx={{
                        display: {
                            sm: "block",
                            fontSize: "10px",
                            paddingLeft: "2px",
                            paddingTop: "20px",
                        },
                    }}
                >
                    Chuwa
                </Typography>
                <SearchBar isSearchWrap={false} />
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <IconButton
                        aria-label="account of current user"
                        color="inherit"
                        sx={{
                            padding: {
                                xs: "6px",
                                sm: "8px"
                            }
                        }}
                        onClick={handleClick}
                    >
                        <PersonOutlineOutlinedIcon sx={{
                            fontSize: {
                                xs: "24px",
                                sm: "30px"
                            },

                        }} />
                        <Typography
                            variant="subtitle2"
                            component="div"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            {isLogin ? "Sign Out" : "Sign In"}
                        </Typography>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleOpenCartDialog}>

                        <Badge badgeContent={4} color="error">
                            <ShoppingCartOutlinedIcon sx={{
                                fontSize: {
                                    xs: "20px",
                                    sm: "30px"
                                }
                            }} />
                        </Badge>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            sx={{
                                display: { sm: "block" },
                                fontSize: {
                                    xs: "14px",
                                    sm: "18px"
                                }
                            }}
                        >
                            {/* todo: 
                             可以考虑localstorage，或者直接从数据库中获取，
                             需要注意怎么去触发此处的渲染
                                */}
                            $0.00
                        </Typography>
                    </IconButton>
                </Box>
            </Toolbar>
            <Toolbar sx={{
                display: { xs: "block", sm: "none" }, minHeight: {
                    xs: "40px",
                    xm: "56px"
                }
            }}>
                <SearchBar isSearchWrap={true} />
            </Toolbar>
            <Cart openCartDialog={openCartDialog} handleOpenCartDialog={handleOpenCartDialog} />

        </AppBar>
    );
}

Header.propTypes = {
    loginState: PropTypes.bool.isRequired,
    onUpdateLogin: PropTypes.func.isRequired,
};