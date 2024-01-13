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
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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

export default function Header({ onUpdateLogin, loginState }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signin");
    };
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch("/api/auth/checkLogin");
                const data = await response.json();
                onUpdateLogin(data.isLoggedIn);
            } catch (err) {
                console.error("Error checking login status", err);
            }
        };
        checkLoginStatus();
    }, []);

    return (
        <AppBar position="static">
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
                            {/* todo: 
                             1、需要在app.js加入一个state（isLogin）并传递到该组件，
                             将此处通过判断props的值控制显示为Sign Out还是Sign In
                                
                                    {isLogin?"Sign Out" :"Sign In"}

                             2、添加相关点击事件，点击事件应该触发一个Dialog进行操作的确认。
                                在此处根据state render不同的的Dialog组件，
                                如
                                    <SignOutDialog/>(只需包含“确认退出登录”等信息),可能需要使用useCallback进行信息验证
                                    <SignOutDialog/>，(Material UI参考Dialog,TextFiled)
                                        其中又包含<SignUpDialog/><ForgetPwdDialog/><PwdSentDialog/>等组件
                                在创建相关Dialog的时候我们可以将这些组件单独放在一个新的文件夹

                                可以考虑增加isSignOutDialogOpen,isSignInDialogOpen状态，去进行切换
                                */}
                            {/* sign out */}
                            {console.log("Login State:", loginState)}
                            {loginState ? "Sign in" : "Sign out"}
                        </Typography>
                    </IconButton>
                    <IconButton color="inherit">
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
        </AppBar>
    );
}

Header.propTypes = {
    loginState: PropTypes.bool.isRequired,
    onUpdateLogin: PropTypes.func.isRequired,
};
