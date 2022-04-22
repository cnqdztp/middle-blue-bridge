import React,{ useState, useEffect } from 'react'
import { Pagination } from '@mui/material'
import './css/Feed.css'
import PostCollectionComponent from './PostCollectionComponent'
import cloudbase from "@cloudbase/js-sdk";

export default class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            page: 1,
            total: 0,
            pageSize: 10,
            loading: false,
            error: null,
            feed: []
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
            loading: false,
            feed: this.state.posts.map(item => {
              return(
              <PostCollectionComponent data={item} key={item._id}/>)}
              )
        })
        
        // console.log(result.data);
        
    }

    render() {
      return (
        <div className='feed-wrapper'>
          <div className='feed-content'>
            {this.state.feed}
          </div>
        </div>
      );
    }
  }