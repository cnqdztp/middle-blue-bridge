import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';

export default function HeaderSearch() {
  return (
    <div className='header-search'>
        <div className="field">
        <p className="control">
            <input className="input" type="email" placeholder="搜索"></input>
            {/* <span className="icon is-small is-left">
            <SearchIcon />
            <i className="fas fa-envelope"></i>
            </span> */}
 
        </p>
        </div>
    </div>
  )
}
