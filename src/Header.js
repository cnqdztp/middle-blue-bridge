import React from 'react'
import './css/Header.css'
import HeaderOptions from './HeaderOptions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderTitle from './HeaderTitle';
// import HeaderSearch from './HeaderSearch';

export default function Header() {
  return (
    <div className='header'>
        <HeaderTitle />
        {/* <HeaderSearch  /> */}
        <HeaderOptions Icon={AccountCircleIcon}/>
    </div>
  )
}
