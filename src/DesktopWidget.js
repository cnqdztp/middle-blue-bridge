import React from 'react'
import { Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './css/DesktopWidget.css'

export default function DesktopWidget() {
    
    const isMobile = window.innerWidth < 1025 ;
    function HandleClick() {
        window.location = '/desktop';
    
    }

  return (
    !isMobile? <div className='desktop-widget'>
        <Alert severity="warning">
            您正在使用电脑或大屏设备。西街天桥建议您使用手机App！ <br></br>
            <Button variant="contained" size="small" color='error' onClick={()=>{HandleClick();}} className='desktop_widget_notification'>试试看！</Button>
        </Alert>
        <br></br>
    </div> 
    : <div></div>
  )

  
}
