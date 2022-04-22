import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import cloudbase from "@cloudbase/js-sdk";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import App from './App';
import './css/Login.css'
import DesktopWidget from './DesktopWidget';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
        西街天桥 Made with ❤
      
    </Typography>
  );
}

const cbApp = cloudbase.init({
  env: "hello-cloudbase-5gt2hqaddac2d0bc"
});
const auth = cbApp.auth();


// const theme = createTheme();

export default function Login() {


  // console.log();
  const handleSubmit = (event) => {
    event.preventDefault();
    

      async function login(){
        await auth.anonymousAuthProvider().signIn();
        const loginState = await auth.getLoginState();
        if(loginState.isAnonymousAuth){
            window.location.href = "/";
        }
      }
      
      login();
  };

  return (

      <div>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            开始游览西街天桥
          </Typography>
          <br></br>
          <Alert severity="info">账号不与您的任何现实身份关联</Alert>
          <br></br>
          <DesktopWidget />

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <LoginButton />


          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </div>
  );
}

function LoginButton() {

  // var isLoggined = false;
  // console.log(auth.getLoginState());

  // console.log(isLoggined);
  if(false){
    return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        更换身份
      </Button>
      );
  }else{
    return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        获取账号
      </Button>
      );
  }
}