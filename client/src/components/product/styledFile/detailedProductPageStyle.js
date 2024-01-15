import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles'


export const Img = styled("img")(({ theme }) => ({
    display: "block",
    maxWidth: "500px",
    maxHeight: "500px",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        maxWidth: 'calc(min(100% - 40px,500px))',
        maxHeight: 'calc(min(100% - 40px,500px))',
        padding: "20px",
    },
    [theme.breakpoints.up('md')]: {
        width: "45%",
        maxWidth: "500px",
        maxHeight: "500px",
        padding: "40px"
    }
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "system-ui",
    fontWeight: "600",
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px',
    },
}));
