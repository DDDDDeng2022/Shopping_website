import Box from "@mui/system/Box";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dialog.css";

// eslint-disable-next-line react/prop-types
export const OuterBox = ({ children }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <div className="content">
            <Box
                sx={{
                    boxSizing: "border-box",
                    width: {
                        xs: "100%",
                        md: "600px",
                    },
                    height: "500px",
                    borderRadius: "10px",
                    boxShadow: 3,
                    margin: "auto",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <IconButton
                    onClick={handleClick}
                    sx={{ position: "absolute", top: 10, right: 10 }}
                >
                    <CloseIcon fontSize="40px" />
                </IconButton>
                {children}
            </Box>
        </div>
    );
};
export default OuterBox;
