import React,{ useState, useEffect } from 'react'
import { Pagination } from '@mui/material'
import './css/Feed.css'
import PostCollectionComponent from './PostCollectionComponent'
import cloudbase from "@cloudbase/js-sdk";
import Playground from './Playground';
import CircularProgress from '@mui/material/CircularProgress';
import DesktopWidget from './DesktopWidget'


export default class Feed extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            page: 1,
            total: 0,
            pageSize: 10,
            loading: false,
            error: null
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts = async () => {
        this.setState({loading: true})
        const {page, pageSize} = this.state;
        const db = cloudbase.database();
        const postsCollection = db.collection('database');
        const query = postsCollection.orderBy('timestamp', 'desc').skip((page - 1) * pageSize).limit(pageSize);
        const result = await query.get();
        const total = await postsCollection.count();
        this.setState({
            posts: result.data,
            total,
            loading: false
        })
        
        // console.log(result.data);
        
    }

    render() {
      let feedContent = this.state.posts.map(item => {
        return(
          // <Playground key={item._id}/>
        <PostCollectionComponent data={item} key={item._id} />
        )}
        ) 
      return (
        <div className='feed-wrapper'>

          <div className='feed-content'>
            
            {/* debugContent */}
            <DesktopWidget  />
          
            {feedContent}
          </div>
        </div>
      );
    }
  }