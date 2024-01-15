/* eslint-disable react/prop-types */
import { Dialog, DialogTitle, IconButton, DialogContent, DialogContentText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const AlertDialog = ({ text, openAlertDialog, handleAlertClose }) => {
    return (
        <Dialog
            onClose={handleAlertClose}
            open={openAlertDialog}>
            <DialogTitle>
                Alert
            </DialogTitle>
            <IconButton
                onClick={handleAlertClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default AlertDialog