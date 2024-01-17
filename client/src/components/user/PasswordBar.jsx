import { useState } from "react";
import { FormControl, IconButton, Tooltip, OutlinedInput, InputAdornment, FormHelperText } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from 'react-redux';
import { setPassword } from "../../redux/EmailPswSlice";
import './dialog.css';

// This regex means at least 1 lowercase, at least 1 uppercase, at least 1 digits(number), and no space at least 8 characters
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;

// eslint-disable-next-line react/prop-types
const PasswordBar = ({ type }) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [validPassword, setValidPassword] = useState(true);
    const checkPassword = (e) => {
        const curr_password = e.target.value;
        dispatch(setPassword(curr_password));
        if (curr_password.match(PASSWORD_REGEX)) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    };
    return (
        <div className="inputContainer">
            <div className="inputTitle">Password</div>
            <FormControl sx={{ marginTop: 1, width: "100%" }}>
                <OutlinedInput
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    onChange={checkPassword}
                    endAdornment={
                        <InputAdornment position="end">
                            <Tooltip title="lowercase &amp; uppercase &amp; number, at least 8 characters">
                                <IconButton
                                    onClick={() => setShowPassword((show) => !show)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
                    }
                    error={type && !validPassword}
                />
                {type && !validPassword && (
                    <FormHelperText error sx={{ textAlign: 'right' }}>
                        Invalid password input!
                    </FormHelperText>
                )}
            </FormControl>

        </div>
    );
};
export default PasswordBar;