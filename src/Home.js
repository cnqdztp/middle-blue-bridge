import React from 'react'
import Header from './Header'
import Feed from './Feed'
import BottomNavigationComponent from './BottomNavigation'
import cloudbase from "@cloudbase/js-sdk";
import './css/Home.css'



export default function Home() {
  const cbApp = cloudbase.init({
    env: "hello-cloudbase-5gt2hqaddac2d0bc"
  });
  const auth = cbApp.auth();

  if (!auth.hasLoginState() && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }

  return (   
    
    <div className='home'>
        <div className='header-sticky'>
        <Header />
      </div>
      <div className='feed'>
        <Feed pageCount={1}/>
      </div>
      <div className='BottomNav'>
        <BottomNavigationComponent  />
      </div>
    </div>
  )
}
