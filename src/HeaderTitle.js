import React from 'react'
import './css/HeaderTitle.css'
// import LogoImg from './image/logo.png'

export default function HeaderTitle() {
  const title = '西街天桥'

  return (
      <div className="header-title">
        <div className='header_title_text'>
            <h1>
                {title}
            </h1>
        </div>
      </div>
    
  )
}
