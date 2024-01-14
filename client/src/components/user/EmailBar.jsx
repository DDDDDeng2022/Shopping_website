import { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setEmail } from "../../redux/EmailPswSlice";
import './dialog.css';

const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailBar = () => {
    // eslint-disable-next-line react/prop-types
    const [validEmail, setValidEmail] = useState(true);
    const dispatch = useDispatch();
    const validateEmail = (event) => {
        const curr_email = event.target.value;
        dispatch(setEmail(curr_email));
        if (curr_email.match(EMAIL_REGEX)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    return (
        <div className="inputContainer">
            <div className="inputTitle">Email</div>
            <FormControl sx={{ marginTop: 1, width: "100%" }}>
                <TextField
                    onChange={validateEmail}
                    placeholder="you@email.com"
                    type="email"
                    error={!validEmail}
                    helperText={!validEmail && "Invalid Email input!"}
                    FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                />
            </FormControl>
        </div>
    );
};

export default EmailBar;