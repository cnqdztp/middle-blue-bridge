import React from 'react'
import './css/HeaderTitle.css'
import cloudbase from '@cloudbase/js-sdk';
// import LogoImg from './image/logo.png'

export default function HeaderTitle() {
  const title = '西街天桥'
  const AuthInfo = cloudbase.auth().hasLoginState();
  var minified_UID;
  if(AuthInfo!==null){
    minified_UID = AuthInfo.user.uid.substring(0,5);
}
  return (
      <div className="header-title">
        <div className='header_title_text'>
            <h1>
                {title} #{minified_UID}
            </h1>
        </div>
      </div>
    
  )
}
