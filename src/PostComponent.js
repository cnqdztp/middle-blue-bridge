import React from 'react'
import { Paper } from '@mui/material'
import { Avatar } from '@mui/material'
import './css/PostComponent.css'

export default function 
PostComponent({
    user_uid,
    timestamp,
    content,
    image,
    likes,
    avatar}) {
  return (
    <div className='postComponent'>
        <div className='postComponent_avatar'>
            <avatar src={avatar} />
        </div>
        <div className='postConponent_body'>
            <div className='postComponent_header'>
                <div className='postComponent_header_text'>
                    <h3>
                        0 
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}
