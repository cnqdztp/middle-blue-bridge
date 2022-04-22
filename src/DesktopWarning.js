import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DesktopWidget from './DesktopWidget';


const theme = createTheme();

export default function DesktopWarning() {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAndGo = () => {
    setOpen(false);
    // set cookie "use_pc_anyway" as true
    //set cookie expire in 1 day
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "use_pc_anyway=" + true + ";" + expires + ";path=/";
    window.location.href = '/';


    

  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              下载App，畅快逛天桥
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              扫一扫下载西街天桥APP，更多精彩内容等你来发现<br></br>(还未上线，下方二维码会带你进入Web端)
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <img src={require('./image/qrcode_debug.capsuleer.me.png')} alt="qrcode" />
              
            </Stack>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
            <Button variant="outlined" color="error" size="small" onClick={handleClickOpen}>
               我就想用电脑
            </Button>
            </Typography> */}
            
          </Container>
            
        </Box>


      </main>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Title />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            西街天桥为手机设计，电脑端参观可能并不美观，但不影响实际使用。<br></br>
            我们<b>强烈推荐</b>你使用手机参观。下载App，爽快逛天桥。<br></br>但是如果你愿意，你也可以继续使用PC访问。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  variant="contained"autoFocus>算了</Button>
          <Button onClick={handleCloseAndGo} >
            放我进去
          </Button>
        </DialogActions>
        <br></br>
      </Dialog>
      {/* End footer */}
    </ThemeProvider>
  );
}

function Title() {

  
  return(
    <DialogTitle id="alert-dialog-title">
          {"不推荐在电脑上参观西街天桥"}
      </DialogTitle>
  )
}