import { Button, Typography } from "@mui/material";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UpdatePasswordPage() {
    const email = useSelector((state) => state.emailPsw.email);
    const navigate = useNavigate();

    const handleClick = () => {
        alert(`email: ${email}`);
        navigate(`/sentEmail`);
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
        </OuterBox>
    );
}