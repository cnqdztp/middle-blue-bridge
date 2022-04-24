import React,{useState} from 'react'
import cloudbase from "@cloudbase/js-sdk";
import './css/Compose.css'
import { Alert, Button, CircularProgress, IconButton, Snackbar, TextareaAutosize } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Picker from 'emoji-picker-react';
import { Input } from '@mui/material';


const AuthInfo =cloudbase.auth().hasLoginState();
var user_uid = 0;
if(AuthInfo!==null){
    user_uid = AuthInfo.user.uid;;
}

const MIN_CHARACTER_COUNT = 5;
const MAX_CHARACTER_COUNT = 280;


export default function Compose() {

    //get url parameter
    const urlParams = new URLSearchParams(window.location.search);
    const reply_id = urlParams.get('reply_id');
    var is_reply = false;
    if(reply_id!==null){
        is_reply = true;
    }
    // console.log(reply_id);


        // console.log(AuthInfo);

    // const cbApp = cloudbase.init({
    //     env: "hello-cloudbase-5gt2hqaddac2d0bc"
    //   });
    //   const auth = cbApp.auth();
    
    //   if (!auth.hasLoginState() && window.location.pathname !== '/login') {
    //     window.location.href = '/login';
    //   }

      const [text, setText] = useState('');
      const [isSubmit, setIsSubmit] = useState(false);
      const [snackbar, setSnackbar] = React.useState({
          open: false,
          message: '',
          variant: 'warning'}
          );


      function showSnackbar(severity, message) {
        setSnackbar({
            open: true,
            message: message,
            variant: severity}
            );
      }
    
      function handleChange(event) {
        
        setText(event.target.value);
        
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbar({open: false, message: snackbar.message, variant: snackbar.variant});
      };


    function onComposeSubmit(params) {
        // const cbApp = cloudbase;
        if(isSubmit){
            return;
        }
        if(text.length<MIN_CHARACTER_COUNT){ 
            showSnackbar('warning', '字数过少');
            return;
        }else if(text.length >=MAX_CHARACTER_COUNT){
            showSnackbar('warning', '字数过多');
            return;
        }

        setIsSubmit(true);
        if(!is_reply){
            cloudbase.callFunction({
                name: "Post_paper",
                data: {
                    "action_type": "NEW",
                    "user_uid": user_uid,
                    // "reply_post_id": "1cf827d0626242f9015cb228413f67c8",
                    "text": text
                }
            }).then((res) => {
                console.log(res);
                window.location.href = '/';
            })
            .catch(console.error);
        }
        else {
            cloudbase.callFunction({
                name: "Post_paper",
                data: {
                    "action_type": "REPLY",
                    "user_uid": user_uid,
                    "reply_post_id": reply_id,
                    "text": text
                }
            }).then((res) => {
                console.log(res);
                window.location.href = '/';
            })
            .catch(console.error);;
        }
    }
    
    function Title() {
        if (!is_reply) {
            return <div className='Title'>
                <span>新分享</span>
            </div>
        }else if(reply_id) {
            return <div className='Title'>
                <span>回复分享</span>
            </div>
        }else{
            return <div className='Title'>
                <span>分享新鲜事<small>(图片功能未上线)</small></span>
            </div>
        }
        
    }
    

  return (
    <div className='Compose'>
        <div className='Header'>
            <div className='backButton'>
                <IconButton color="primary" component="span" onClick={()=>{
                     window.history.back(-1)
                }} >
                    <ArrowBackIcon/>
                </IconButton>
            </div>
            
            <Title className="Title" />
            <Button variant="contained" endIcon={<SendIcon />} size="small" className='send_button' onClick={()=>{onComposeSubmit()}}>
                发送
            </Button>
        </div>
        <div className='body_container'>
            <div className='input_container'>
                <TextareaAutosize placeholder="有什么想分享？" className='main_input'  minRows={3} autoFocus value={text} onChange={handleChange}/>
                {/* <input type="text" className='main_input' placeholder="输入内容" /> */}
            </div>
            <div className='cutLine'>
            </div>
            <div className='accessory_container'>
                <div className='add_photo'>
                <label htmlFor="contained-button-file">
                    {/* <Input  accept="image/*" id="contained-button-file" multiple type="file" /> */}
                        <IconButton color="primary" disabled component="span" accept="image/*" id="icon-button-file" type="file">
                            <AddPhotoAlternateOutlinedIcon/>
                        </IconButton>
                        
                </label>
                </div>
                <div className='character_counter'>
                    <span>{text.length}/{MAX_CHARACTER_COUNT}</span>
                </div>
            </div>
        </div>
        <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert  severity={snackbar.variant}  sx={{ width: '100%' } } onClose={handleClose}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  )
}



