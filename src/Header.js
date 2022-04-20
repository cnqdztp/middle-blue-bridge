import React from 'react'
import './css/Header.css'
import HeaderOptions from './HeaderOptions';
import RefreshIcon from '@mui/icons-material/Refresh';import HeaderTitle from './HeaderTitle';
// import HeaderSearch from './HeaderSearch';

export default function Header() {
  return (
    <div className='header'>
        <HeaderTitle />
        {/* <HeaderSearch  /> */}
        <HeaderOptions Icon={RefreshIcon}/>
    </div>
  )
}
