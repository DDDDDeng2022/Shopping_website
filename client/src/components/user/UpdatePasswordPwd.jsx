import { Button, Typography } from "@mui/material";
import PasswordBar from "./PasswordBar";
import OuterBox from "./OuterBox";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiCall from "../../services/apiCall";

export default function UpdatePasswordPage() {
    const email = useSelector((state) => state.emailPsw.email);
    const password = useSelector((state) => state.emailPsw.password);
    const navigate = useNavigate();

    const handleClick = () => {
        apiCall({ url: `/api/user/email/${encodeURIComponent(email)}`, method: 'GET' }).then((user) => {
            if (user) {
                apiCall({ url: `/api/user/${user._id}`, method: 'PUT', data: { password } })
            }
        });
        navigate(`/signin`);
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
        </OuterBox>
    );
}