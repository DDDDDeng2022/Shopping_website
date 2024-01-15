import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import PasswordBar from "./PasswordBar";
import OuterBox from "./OuterBox";
import EmailBar from "./EmailBar";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setIsLogin } from "../../redux/loginStateSlice";
import apiCall from "../../services/apiCall"
import { setUser } from "../../redux/userSlice";

export default function SigninPage() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.emailPsw.email);
    const password = useSelector((state) => state.emailPsw.password);
    const navigate = useNavigate();
    const handleSignIn = async () => {
        await apiCall({ url: '/api/auth/login', method: 'POST', data: {email, password}}).then((response) => {
            if (response.ok) {
                dispatch(setIsLogin(true));
                dispatch(setUser({ name: response.name, role: response.role, cart: response.cart }));
                localStorage.setItem('token', response.token);
                navigate(`/`);
            } else {
                console.error('Email or Password is wrong');
                alert(`An error occured: ${response.message}`)
            }
        })
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
