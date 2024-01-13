import { Button, Typography } from "@mui/material";
import PasswordBar from "./PasswordBar";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SignupPage() {
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const navigate = useNavigate();
    const handleSignUp = () => {
        // todo 同sign in：
        alert(`email: ${email}, password: ${password}`);
        navigate(`/`);
    };
    return (
        <OuterBox>
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px" }, fontWeight: "700" }}>
                Sign up an account
            </Typography>
            <EmailBar />
            <PasswordBar type="signup" />
            <Button color="secondary" variant="contained" onClick={handleSignUp} sx={{ width: "85%" }}>
                Create account
            </Button>
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
        </OuterBox>
    );
}
