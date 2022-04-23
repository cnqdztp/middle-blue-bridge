import React from 'react'
import './css/Header.css'
import HeaderOptions from './HeaderOptions';
import RefreshIcon from '@mui/icons-material/Refresh';import HeaderTitle from './HeaderTitle';
import { IconButton } from '@mui/material';
// import HeaderSearch from './HeaderSearch';

export default function Header(onClick) {
  return (
    <div className='header'>
        <HeaderTitle />
        {/* <HeaderSearch  /> */}
        {/* <IconButton onClick={onClick}> */}
          <HeaderOptions Icon={RefreshIcon} onClick={onClick}/>
        {/* </IconButton> */}
    </div>
  )
}
