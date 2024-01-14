import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import PasswordBar from "./PasswordBar";
import OuterBox from "./OuterBox";
import EmailBar from "./EmailBar";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setIsLogin } from "../../redux/loginStateSlice";

export default function SigninPage() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const navigate = useNavigate();
    const handleSignIn = async () => {
        // todo 像后端验证数据：
        // 首先要保证用户账号是有效的，才进行跳转到productlList页面;
        // 方法1: 使用navigate(`/url`, { state: { 数据 } });，然后在接受页面使用useLocation获取,把用户信息传给商品界面
        // 方法2： 在store里新建其他状态，把用户信息传进去，在其他页面获取
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                dispatch(setIsLogin(true));
            } else {
                console.error('Email or Password is wrong');
            }
        } catch (err) {
            console.error('Error during Signin', err);
        }
        alert(`email: ${email}, password: ${password}`);
        navigate(`/`);
    };
    return (
        <OuterBox>
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px" }, fontWeight: "700" }}>
                Sign in to your account
            </Typography>
            <EmailBar />
            <PasswordBar />
            <Button variant="contained" onClick={handleSignIn} sx={{ width: "85%" }}>
                Sign In
            </Button>
            <Grid container sx={{ fontSize: "16px", width: "85%" }} columns={{ xs: 4, sm: 14 }} >
                <Grid item xs={4} sm={10} >
                    <Typography noWrap sx={{ fontSize: "14px", color: "#6B7280" }}>
                        Don&#39;t have an account?{" "}
                        <Link to="/signup" style={{ color: '#5048E5', fontWeight: '500', fontFamily: "sans-serif" }}>
                            Sign Up
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} >
                    <Link to="/updatePassword" style={{ color: '#5048E5', fontWeight: '500', fontFamily: "sans-serif" }}>
                        Forgot password?
                    </Link>
                </Grid>
            </Grid>
        </OuterBox>
    );
}
