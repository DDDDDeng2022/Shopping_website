/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Typography } from "@mui/material";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiCall from "../../services/apiCall";
import { EMAIL_REGEX } from './EmailBar';
import AlertDialog from './AlertDialog';

export default function UpdatePasswordPage() {
    const email = useSelector((state) => state.emailPsw.email);
    const navigate = useNavigate();
    const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
    const [alertText, setAlertText] = React.useState();

    const handleAlertClose = () => {
        setOpenAlertDialog(false);
        setAlertText(null);
    }
    const handleClick = () => {
        if (email === "" || !email.match(EMAIL_REGEX)) {
            setAlertText(`Invalid email!`);
            setOpenAlertDialog(true);
        }
        else {
            apiCall({ url: `/api/user/email/${encodeURIComponent(email)}`, method: 'GET' }).then((user) => {
                if (user) {
                    navigate(`/sentEmail`, { state: { userId: user._id } });
                }
                else {
                    setAlertText(`email: ${email} is not signed up!`);
                    setOpenAlertDialog(true);
                }
            });
        }
    };
    return (
        <OuterBox >
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px", }, fontWeight: "700" }}>
                Update your password
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", sm: "14px" }, color: "#6B7280" }}>
                Enter your email link, we will send you the recovery link
            </Typography>
            <EmailBar />
            <Button variant="contained" onClick={handleClick} sx={{ width: "85%" }}>
                Update Password
            </Button>
            <AlertDialog text={alertText} openAlertDialog={openAlertDialog} handleAlertClose={handleAlertClose} />
        </OuterBox>
    );
}