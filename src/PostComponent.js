import React from 'react'
import { Paper } from '@mui/material'
// import { Avatar } from '@mui/material'
import './css/PostComponent.css'
// import './css/bulma.min.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


// const PostComponent = (props) => {

//     return ;
// }

export default function 
PostComponent({
    user_uid,
    timestamp,
    content,
    image,
    likes,
    avatar}) {
        var user_uid_minified = user_uid.slice(0,5);
  return (
    <Paper className="post-container">
        <div className='postComponent'>
            
            <div className='postConponent_body'>
                
                <div className='postComponent_header'>
                    <div className='postComponent_avatar'>
                        {/* <Avatar src={avatar} /> */}
                    </div>
                    <div className='postComponent_header_text'>
                        <h3>
                            #{user_uid_minified}
                        </h3>
                    </div>
                    {/* <div className='postComponent_header_actions'>
                        <button className='button is-light is-small is-rounded' >回复</button>        
                    </div> */}
                    
                </div>
                <div className='postComponent_header_description'>
                        <p>
                            {content}
                        </p>
                    </div>
                    <Zoom>
                        <img src={image}
                        alt='' className='postComponent_img'/>
                    </Zoom>
            </div>
            {/* <div className='postComponent_footer'>
            </div> */}
        </div>
    </Paper>
  )
}
