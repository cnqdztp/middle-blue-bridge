import React from 'react'
import { Button } from '@mui/material'

export default function DeleteButton(post_id,post_key) {

    

  return (
    <div>
        <Button color="error" size='small' onClick={onclick}>
            删除
        </Button>
    </div>
  )
}
