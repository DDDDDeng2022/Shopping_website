import { Button, Link, Typography } from "@mui/material";
import PasswordBar from "./PasswordBar";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
export default function App() {
    const handleSignIn = () => { };
    return (
        <OuterBox>
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px" }, fontWeight: "700" }}>
                Sign up an account
            </Typography>
            <EmailBar />
            <PasswordBar type="signup" />
            <Button color="secondary" variant="contained" onClick={handleSignIn} sx={{ width: "85%" }}>
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
                <Link
                    color="#5048E5"
                    href=""
                    sx={{ fontWeight: "500" }}
                >
                    Sign in
                </Link>
            </Typography>
        </OuterBox>
    );
}
