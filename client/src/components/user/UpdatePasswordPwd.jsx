import React from 'react';
import { Button, Typography } from "@mui/material";
import PasswordBar from "./PasswordBar";
import OuterBox from "./OuterBox";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import apiCall from "../../services/apiCall";
import AlertDialog from "./AlertDialog";

export default function UpdatePasswordPage() {
    const password = useSelector((state) => state.emailPsw.password);
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state?.userId;
    const [openAlertDialog, setOpenAlertDialog] = React.useState(false);
    const [alertText, setAlertText] = React.useState();
    const handleAlertClose = () => {
        setOpenAlertDialog(false);
        setAlertText(null);
        navigate(`/signin`);
    }
    const handleClick = () => {
        apiCall({ url: `/api/user/${userId}`, method: 'PUT', data: { password } })
        setAlertText(`password updated successfully!`);
        setOpenAlertDialog(true);
    };

    return (
        <OuterBox >
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px", }, fontWeight: "700" }}>
                Update your password
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", sm: "14px" }, color: "#6B7280" }}>
                Enter your new password
            </Typography>
            <PasswordBar />
            <Button variant="contained" onClick={handleClick} sx={{ width: "85%" }}>
                Update Password
            </Button>
            <AlertDialog text={alertText} openAlertDialog={openAlertDialog} handleAlertClose={handleAlertClose} />
        </OuterBox>
    );
}