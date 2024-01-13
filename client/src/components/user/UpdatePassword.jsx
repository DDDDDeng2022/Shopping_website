import { Button, Typography } from "@mui/material";
import EmailBar from "./EmailBar";
import OuterBox from "./OuterBox";
export default function UpdatePasswordPage() {
    const handleClick = () => { };
    return (
        <OuterBox >
            <Typography sx={{ fontSize: { xs: "24px", sm: "34px", }, fontWeight: "700" }}>
                Update your password
            </Typography>
            <Typography sx={{ fontSize: { xs: "10px", sm: "14px" }, color: "#6B7280" }}>
                Enter your email link, we will send you the recovery link
            </Typography>
            <EmailBar />
            <Button color="secondary" variant="contained" onClick={handleClick} sx={{ width: "85%" }}>
                Update Password
            </Button>
        </OuterBox>
    );
}