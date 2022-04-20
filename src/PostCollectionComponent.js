import React from 'react'
import './css/PostCollectionComponent.css'
import PostComponent from './PostComponent'

export default function PostCollectionComponent() {
  return (
    <div className='postCollectionComponent'>
        <div className='postCollectionFlexbox'>
            <PostComponent image={"https://download.capsuleer.me/download_page/file_thumbnail/loveletter.jpg"} content={"满足了我对浪漫的一切想象" } user_uid="0"/>
            <PostComponent content={"可恶，我也好想回去"} user_uid="3"/>
            <div className='postComponent_header_actions'>
                <button className='button is-light is-small is-rounded' >回复</button>        
            </div>
        </div>
        
    </div>
  )
}
