import { Button, Typography, FormControlLabel, Switch } from "@mui/material";
import Grid from "@mui/material/Grid";
import PasswordBar from "./PasswordBar";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from "react";
import apiCall from "../../services/apiCall"

export default function SignupPage() {
    const [signUpAsAdmin, setSignUpAsAdmin] = useState(false);
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const navigate = useNavigate();
    const handleSignUp = () => {
        // todo 同sign in：
        const response = apiCall({ url: '/api/auth/signup', method: 'POST', data: {email, password, role: signUpAsAdmin ? 'Admin': 'User'} });
        alert(`email: ${email}, password: ${password}`);
        navigate(`/`);
    };
    const handleSignUpAsAdmin = () => {
        setSignUpAsAdmin(true);
    }
    return (
        <OuterBox>
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px" }, fontWeight: "700" }}>
                Sign up an account
            </Typography>
            <EmailBar />
            <PasswordBar type="signup" />
            <Button variant="contained" onClick={handleSignUp} sx={{ width: "85%" }}>
                Create account
            </Button>
            <Grid container sx={{ fontSize: "16px", width: "85%", display: "flex", justifyContent: "space-between", alignItems: "center" }} columns={{ xs: 4, sm: 14 }} >
                <Grid item xs={4} sm={8}>
                    <Typography
                        noWrap
                        sx={{
                            fontSize: "14px",
                            color: "primary.secondary",
                            width: "85%"
                        }}>
                        Already have an account?{" "}
                        <Link to="/signin" style={{ color: '#5048E5', fontWeight: '500', fontFamily: "sans-serif" }}>
                            Sign In
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={6} sx={{display: "flex", justifyContent: "flex-end"}} >
                    <FormControlLabel control={<Switch color="secondary" onChange={handleSignUpAsAdmin} />} 
                        label="Admin Signup" />
                </Grid>
            </Grid>
        </OuterBox>
    );
}
