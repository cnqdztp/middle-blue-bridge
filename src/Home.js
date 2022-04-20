import React from 'react'
import Header from './Header'
import Feed from './Feed'
import BottomNavigationComponent from './BottomNavigation'
import './css/Home.css'

export default function Home() {
  return (   
    <div className='home'>
        <div className='header-sticky'>
        <Header />
      </div>
      <div className='feed'>
        <Feed />
      </div>
      <div className='BottomNav'>
        <BottomNavigationComponent  />
      </div>
    </div>
  )
}
