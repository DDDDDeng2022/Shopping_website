import React from 'react';
import { Button, Typography, FormControlLabel, Switch, Grid } from "@mui/material";
import PasswordBar from "./PasswordBar";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import { setIsLogin } from "../../redux/loginStateSlice";
import apiCall from "../../services/apiCall"
import AlertDialog from './AlertDialog';
import { EMAIL_REGEX } from './EmailBar';
import { PASSWORD_REGEX } from './PasswordBar';

export default function SignupPage() {
    const [signUpAsAdmin, setSignUpAsAdmin] = useState(false);
    const email = useSelector((state) => state.emailPsw.email);
    const password = useSelector((state) => state.emailPsw.password);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
    const [alertText, setAlertText] = React.useState();
    const handleAlertClose = () => {
        setOpenAlertDialog(false);
        setAlertText(null);
    }
    const handleSignUp = () => {
        if (email === "" || password === "" || !email.match(EMAIL_REGEX) || !password.match(PASSWORD_REGEX)) {
            setAlertText(`Invalid Email or Password!`);
            setOpenAlertDialog(true);
        }
        else {
            try {
                const response = apiCall({ url: '/api/auth/signup', method: 'POST', data: { email, password, role: signUpAsAdmin ? 'Admin' : 'User' } });
                if (response.status === 201) {
                    dispatch(setIsLogin(true));
                    localStorage.setItem('token', response.token);
                    navigate(`/`);
                }
                else {
                    navigate('/error')
                }
            } catch (error) {
                console.error('Login error: ', error);
                alert(`An error occurred: ${error.message || 'Unknown error'}`);
            }
        }

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
                <Grid item xs={4} sm={6} sx={{ display: "flex", justifyContent: "flex-end" }} >
                    <FormControlLabel control={<Switch color="secondary" onChange={handleSignUpAsAdmin} />}
                        label="Admin Signup" />
                </Grid>
            </Grid>
            <AlertDialog text={alertText} openAlertDialog={openAlertDialog} handleAlertClose={handleAlertClose} />
        </OuterBox>
    );
}
