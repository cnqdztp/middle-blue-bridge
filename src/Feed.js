import React from 'react'
import { Pagination } from '@mui/material'
import './css/Feed.css'
import PostCollectionComponent from './PostCollectionComponent'
import cloudbase from "@cloudbase/js-sdk";
import Box from '@mui/material/Box';
import Playground from './Playground';
import CircularProgress from '@mui/material/CircularProgress';
import DesktopWidget from './DesktopWidget'


export default class Feed extends React.Component{
  
  
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            page: 1,
            total: 1,
            totalPages: 0,
            pageSize: 10,
            loading: false,
            isRefresh : props.isRefresh,
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
        const query = postsCollection.orderBy('lastest_timestamp', 'desc').skip((page - 1) * pageSize).limit(pageSize);
        const result = await query.get();
        const total = await postsCollection.count();
        
        this.setState({
            posts: result.data,
            total: total.total,
            totalPages : Math.ceil(total.total / pageSize),
            loading: false
        });
        
        // console.log(this.state.totalPages);
        
    }

    handleChange = async (event, value) => {
      await this.setState({page: value});
      this.getPosts();
    }
    

    render() {
      if(this.state.loading){
        return (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )
      }

      let feedContent = this.state.posts.map(item => {
        return(
          // <Playground key={item._id}/>
        <PostCollectionComponent data={item} key={item._id} post_id={item._id}/>
        )}
        ) 
      return (
        <div className='feed-wrapper'>

          <div className='feed-content'>
            
            {/* debugContent */}
            <DesktopWidget  />
          
            {feedContent}
            <div className='Pagination-nav'>
            <Pagination className='Pagination' count={this.state.totalPages} page={this.state.page} siblingCount={0} boundaryCount={2} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
      );
    }
  }