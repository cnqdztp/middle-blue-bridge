import { Button } from '@mui/material';
import React from 'react'
import './css/PostCollectionComponent.css'
import PostComponent from './PostComponent'



export default function PostCollectionComponent(data) {
  const post_id = data.data._id;  
  const posts = data.data.content.map((data,index) => {
    // console.log(data);
    var img = data.img;
    var txt = data.text;
    var user_uid = data.post_user_uid;
    var timestamp = data.timestamp;
    // console.log(data._id)
    // console.log(timestamp);
    return <PostComponent key={index} image={img} content={txt} user_uid={user_uid} timestamp={timestamp} />
  })

  

  return (
    <div className='postCollectionComponent'>
        <div className='postCollectionFlexbox'>
            {posts}
            <div className='postComponent_header_actions'>
            <Button variant="contained" color="secondary" disabled onClick={() => { Reply(post_id); }}>
              <small>回复</small>
            </Button>      
            </div>
        </div>
        
    </div>
  )
}

function Reply(post_id) {
  // console.log(post_id);
  // alert(post_id);
}
