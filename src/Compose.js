import React,{useState} from 'react'
import cloudbase from "@cloudbase/js-sdk";
import './css/Compose.css'
import { Button, IconButton, TextareaAutosize } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Picker from 'emoji-picker-react';
import { Input } from '@mui/material';


export default function Compose(type) {

    const cbApp = cloudbase.init({
        env: "hello-cloudbase-5gt2hqaddac2d0bc"
      });
      const auth = cbApp.auth();
    
      if (!auth.hasLoginState() && window.location.pathname !== '/login') {
        window.location.href = '/login';
      }


    const [emojiPickerOn, setemojiPickerOn] = useState(false);
    function emojiPickerToggle(params) {
        
    }
    
  return (
    <div className='Compose'>
        <div className='Header'>
            <div className='backButton'>
                <IconButton color="primary" component="span" onClick={()=>{
                    //  window.history.back(-1)
                }} >
                    <ArrowBackIcon/>
                </IconButton>
            </div>
            
            <Title type={type} className="Title" />
            <Button variant="contained" endIcon={<SendIcon />} size="small" className='send_button'>
                发送
            </Button>
        </div>
        <div className='body_container'>
            <div className='input_container'>
                <TextareaAutosize placeholder="有什么想分享？" className='main_input'  minRows={3} autoFocus />
                {/* <input type="text" className='main_input' placeholder="输入内容" /> */}
            </div>
            <div className='cutLine'>
            </div>
            <div className='accessory_container'>
                <div className='add_photo'>
                <label htmlFor="contained-button-file">
                    <Input  accept="image/*" id="contained-button-file" multiple type="file" />
                        <IconButton color="primary" component="span" accept="image/*" id="icon-button-file" type="file">
                            <AddPhotoAlternateOutlinedIcon/>
                        </IconButton>
                </label>
                </div>
            </div>
        </div>
    </div>
  )
}

function onComposeSubmit(params) {
    const cbApp = cloudbase;
    const AuthInfo =cloudbase.auth().getCurrenUser();
    console.log(AuthInfo);
    cloudbase.callFunction({
        name: "Post_paper",
        data: {}
      }).then((res) => {
        console.log(res);
      })
      .catch(console.error);;
}

function Title(type) {
    if (type === 'NEW') {
        return <div className='Title'>
            <span>新分享</span>
        </div>
    }else if(type === 'REPLY') {
        return <div className='Title'>
            <span>回复分享</span>
        </div>
    }else{
        return <div className='Title'>
            <span>分享新鲜事</span>
        </div>
    }
    
}

