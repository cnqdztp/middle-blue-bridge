import React from 'react'
import Header from './Header'
import Feed from './Feed'
import BottomNavigationComponent from './BottomNavigation'
import cloudbase from "@cloudbase/js-sdk";
import './css/Home.css'

const cbApp = cloudbase.init({
  env: "hello-cloudbase-5gt2hqaddac2d0bc"
});
const auth = cbApp.auth();

export default function Home() {


  if (!auth.hasLoginState() && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }

  let [requestRefresh, setRequestRefresh] = React.useState(false);

  const  handleRefresh = async () => {
    await setRequestRefresh(true);
    //refresh
    window.location.reload();
    // console.log(requestRefresh);
  }


  

  return (   
    
    <div className='home'>
        <div className='header-sticky'>
        <Header onClick={handleRefresh} />
        {/* onClick={this.setState({loading: true})} */}
      </div>
      <div className='feed'>
        <Feed isRefresh={requestRefresh} />
      </div>
      <div className='BottomNav'>
        <BottomNavigationComponent  />
      </div>
    </div>
  )
}
