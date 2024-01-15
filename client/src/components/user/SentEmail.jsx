import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import OuterBox from "./OuterBox";
import './dialog.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SentEmailPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/updatePasswordPwd');
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <OuterBox>
            <div className="emailIcon">
                <ForwardToInboxIcon
                    sx={{
                        fontSize: 70,
                        color: "primary.main"
                    }} />
                <div className="emailText">
                    We have sent the update password link to your email, please check that!
                </div>
            </div>
        </OuterBox>
    );
}