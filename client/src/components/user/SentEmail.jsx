import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import OuterBox from "./OuterBox";
import './dialog.css'
export default function SentEmailPage() {
    return (
        <OuterBox>
            <div className="emailIcon">
                <ForwardToInboxIcon
                    sx={{
                        fontSize: 70,
                        color: "secondary.main"
                    }} />
                <div className="emailText">
                    We have sent the update password link to your email, please check that!
                </div>
            </div>
        </OuterBox>
    );
}