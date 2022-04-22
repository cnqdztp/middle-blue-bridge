import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';import './css/BottomNavigationConponent.css'
import { Link } from 'react-router-dom';

export default function BottomNavigationComponent() {
  return (
    <div className='nav'>
        <BottomNavigation className='nav_bar'>
        <BottomNavigationAction label="看贴纸" icon={<HomeIcon  />} component={Link} to={'/'} />
        <BottomNavigationAction label="找贴纸" icon={<SearchIcon />} component={Link} to={'/test'} />
        <BottomNavigationAction label="写贴纸" icon={<CreateIcon />} component={Link} to={'/compose'}/>
      </BottomNavigation>
    </div>
  )
}
