// import { Feed } from '@mui/icons-material';

import './css/App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Playground from './Playground';
import DesktopWarning from './DesktopWarning';
import Login from './Login';
import cloudbase from "@cloudbase/js-sdk";
import Compose from './Compose';


// import FabComponent from './FabComponent';


// import { AddIcon } from '@mui/icons-material';

// import PostComponent from './PostComponent';

function App() {
  //TODO: redirect non-mobile users to desktop version
  // Check if is mobile
  const isMobile = window.innerWidth < 1025;

  //  function isMobileCheck() {
  //   if(isMobile) {
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  // //check if cookie "use_pc_anyway" is true
  // const usePcAnyway = document.cookie.indexOf("use_pc_anyway=true") > -1;
  
  // if(!isMobile && !usePcAnyway){
  //   if(window.location.pathname !== '/desktop'){
  //     window.location.href = '/desktop';
  //   }
  // }

  
  

  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/test" element={<Playground/>} />
          <Route path="/compose" element={<Compose/>} />
          <Route path="/desktop" element={<DesktopWarning/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Playground/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
