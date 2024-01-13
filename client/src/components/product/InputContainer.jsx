import React from "react";
import { FormControl, FormHelperText, TextField } from "@mui/material";
// 待删

const InputContainer = (props) => {
    const { title, content, checkStatus } = props;
    const [isBlank, setIsBlank] = React.useState(true);
    const [curContent, setCurContent] = React.useState(content || "");
    React.useEffect(() => {
        setIsBlank(curContent === "");
    }, [checkStatus, curContent])

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div style={{ fontFamily: "Helvetica, Arial, sans-serif", color: "#6B7280", fontSize: "14px" }}>{title}</div>
            <FormControl sx={{ marginTop: 1, width: "100%" }}>
                <TextField
                    fullWidth
                    hiddenLabel
                    sx={{ padding: 0 }}
                    value={curContent}
                    onChange={(e) => setCurContent(e.target.value)}
                    error={isBlank && checkStatus} />
                {isBlank && checkStatus &&
                    <FormHelperText error sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: 0
                    }}>
                        {title} can not be blank!
                    </FormHelperText>
                }
            </FormControl>
        </div>
    );
};

export default InputContainer;