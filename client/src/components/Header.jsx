import { AppBar, Tooltip, Box, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cart from "./cart/CartDialog";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../services/apiCall";
import { setIsLogin } from "../redux/loginStateSlice";
import { resetUser, setUser } from "../redux/userSlice";

export default function Header() {
    const [openCartDialog, setOpenCartDialog] = useState(false);
    const isLogin = useSelector((state) => state.isLogin);
    const cartTotal = useSelector((state) => state.user.cartTotal);
    const userName = useSelector(state => state.user.user_name);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        if (isLogin) {
            dispatch(setIsLogin(false));
            dispatch(resetUser());
            localStorage.removeItem('token');
        } else {
            navigate("/signin");
        }
    };
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            apiCall({ url: '/api/auth/checkLogin', method: 'POST', data: { token: storedToken } }).then((response) => {
                if (response) {
                    dispatch(setIsLogin(true));
                    dispatch(setUser({ id: response.user_id, name: response.user_name, role: response.role, cart: response.cart }));
                }
            });
        }
    }, []);
    const handleOpenCartDialog = () => {
        setOpenCartDialog(!openCartDialog);
    }
    return (
        <AppBar position="static" sx={{ backgroundColor: "#101827" }}>
            <Toolbar sx={{ minHeight: { xs: "30px", sm: "60px" } }} >
                <Typography variant="h5" noWrap sx={{ display: { xs: "none", sm: "block" } }}>
                    Management
                </Typography>
                <Typography sx={{
                    display: {
                        sm: "block",
                    }, fontSize: "10px",
                    paddingLeft: "2px",
                    paddingTop: "20px",
                }}
                >
                    Chuwa
                </Typography>
                <SearchBar isSearchWrap={false} searchInput={searchInput} setSearchInput={setSearchInput} />
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }} >
                    <IconButton color="inherit"
                        sx={{ padding: { xs: "6px", sm: "8px" } }}
                        onClick={handleClick}
                    >
                        <Tooltip title={userName}><PersonOutlineOutlinedIcon sx={{ fontSize: { xs: "24px", sm: "30px" } }} />
                        </Tooltip> <Typography sx={{ fontSize: "17px", display: { xs: "none", sm: "block" } }}>
                            {isLogin ? "Sign Out" : "Sign In"}
                        </Typography>
                    </IconButton>
                    <IconButton color="inherit" onClick={handleOpenCartDialog}>
                        <Badge badgeContent={cartTotal.quantity} color="error">
                            <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: "20px", sm: "30px" } }} />
                        </Badge>
                        <Typography
                            sx={{ display: { sm: "block" }, fontSize: { xs: "14px", sm: "18px" } }}>
                            ${cartTotal.amount.toFixed(2)}
                        </Typography>
                    </IconButton>
                </Box>
            </Toolbar>
            <Toolbar sx={{ display: { xs: "block", sm: "none" }, minHeight: { xs: "40px", xm: "56px" } }}>
                <SearchBar isSearchWrap={true} searchInput={searchInput} setSearchInput={setSearchInput} />
            </Toolbar>
            <Cart openCartDialog={openCartDialog} handleOpenCartDialog={handleOpenCartDialog} />

        </AppBar >
    );
}

Header.propTypes = {
    loginState: PropTypes.bool.isRequired,
    onUpdateLogin: PropTypes.func.isRequired,
};