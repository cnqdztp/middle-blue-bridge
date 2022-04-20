import React from 'react'
import { Pagination } from '@mui/material'
import PostComponent from './PostComponent'
import './css/Feed.css'

export default function Feed({pageCount}) {
  return (
    <div className='feed-wrapper'>
      <div className='feed-content'>
      <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
      </div>
        
        {/* <Pagination count={pageCount}/> */}
    </div>
  )
}
