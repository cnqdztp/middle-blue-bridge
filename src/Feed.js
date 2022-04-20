import React from 'react'
import { Pagination } from '@mui/material'
import PostComponent from './PostComponent'

export default function Feed({pageCount}) {
  return (
    <div className='feed'>
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
        <Pagination count={pageCount}/>
    </div>
  )
}
