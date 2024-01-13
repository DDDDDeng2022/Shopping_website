import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    height: 'auto',//
   
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    margin: 0,//
  },
  backgroundColor: 'white',
  display:'flex',
  alignItems:'flex-start',
  justifyContent: 'flex-end',

  // display:'flex',
  // position:'absolute',
  // flexDirection:'row-reverse',
  
  
  // position: 'fixed',
  // top: '0px',
  // right: '0px',
  // width: '25%',
  // // height: '80%',
  // border:'2px red solid',
  // backdropFilter: 'white', // Apply backdrop filter to blur the background
  // padding:'0px'
//   '& .DialogTitle-root':{
//     backgroundColor: 'purple',
//     color: 'white'
//   }
}));

export default function Cart(props) {
    // eslint-disable-next-line react/prop-types
  const {openCartDialog,handleOpenCartDialog}=props;
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    // console.log("open: ",open);
    setOpen(openCartDialog);
  },[openCartDialog]);
//   console.log("cart: ",openCartDialog);
  const handleClose = () => {
    setOpen(false);
   handleOpenCartDialog();
  };

  //*********************   temporary hard code for testing **************************************************** */
  const cartSummary= [
    { title:'subtotal', value:'$20.00'},
    { title:'tax', value:'$1.00'},
    { title:'discount', value:'$5.00'},
    { title:'estimatedTotal', value:'$16.00'},

  ]
   

  const renderedCartSummary = cartSummary.map((attribute)=>{
    return (
        <div key={attribute.title} style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <div>{attribute.title}</div>
            <div>{attribute.value}</div>
        </div>
       
    )
  })

  let dummyCartCounter = 1;

  //*********************   temporary hard code for testing **************************************************** */
  return (

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // sx={{width:'25%', height:'80%'}}
      >
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor:'#5048E5', color:'white'}} id="customized-dialog-title">
          Cart ({dummyCartCounter})
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon sx={{color: 'white'}}/>
        </IconButton>
        <DialogContent dividers sx={{backgroundColor:'white', borderBottom:'1px gray solid'}}>
          <Typography gutterBottom sx={{}}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions sx={{backgroundColor:'white', display:'flex', flexDirection:'column', justifyContent:'center', padding:'5px 40px'}}>
            <div style={{color:'black', width:'100%'}}>
               {renderedCartSummary}
            </div>
            <div>
            <Button autoFocus onClick={handleClose} 
            sx={{width:'auto', backgroundColor:'#5048E5', color:'white', fontSize:'12px', fontWeight:'normal',
                    '&: hover':{
                        backgroundColor: 'gray',
                        color: 'white'
                    },
                    padding:'4px 50px',
                    fontFamily:'Inter',
                    textTransform:'none',
                    }}>
           Continue to checkout
          </Button>
            </div>
         
        </DialogActions>
      </BootstrapDialog>
  );
}

