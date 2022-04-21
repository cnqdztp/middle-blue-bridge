import React from 'react'
import { Pagination } from '@mui/material'
import './css/Feed.css'
import PostCollectionComponent from './PostCollectionComponent'

export default function Feed({pageCount}) {
  return (
    <div className='feed-wrapper'>
      <div className='feed-content'>
        <PostCollectionComponent />
        {/* <PostCollectionComponent /> */}
      </div>
        
        {/* <Pagination count={pageCount} color="primary" variant="outlined" /> */}
    </div>
  )
}
