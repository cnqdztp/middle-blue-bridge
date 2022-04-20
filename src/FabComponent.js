import React from 'react'
import { Fab } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';

export default function FabComponent() {
  return (
    <div className='fab'>
        <Fab color="primary" aria-label="add">
            <NoteIcon />
        </Fab>
    </div>
  )
}
