import React from 'react'
import './css/PostCollectionComponent.css'
import PostComponent from './PostComponent'

export default function PostCollectionComponent(data,key,post_id) {
  // console.log(data.data.content);

  const posts = data.data.content.map((data,index) => {
    var img = data.img;
    var txt = data.text;
    var user_uid = data.post_user_uid;
    // console.log(img);
    return <PostComponent key={index} image={img} content={txt} user_uid={user_uid} />
  })

  return (
    <div className='postCollectionComponent'>
        <div className='postCollectionFlexbox'>
            {posts}
            <div className='postComponent_header_actions'>
                <button className='button is-light is-small is-rounded' >回复</button>        
            </div>
        </div>
        
    </div>
  )
}
