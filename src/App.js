// import { Feed } from '@mui/icons-material';

import './css/App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Playground from './Playground';
import DesktopWarning from './DesktopWarning';
// import FabComponent from './FabComponent';


// import { AddIcon } from '@mui/icons-material';

// import PostComponent from './PostComponent';

function App() {
  //TODO: redirect non-mobile users to desktop version
  // Check if is mobile
  const isMobile = window.innerWidth < 768;

  if(!isMobile && window.location.pathname === '/') {
    //go to google.com
    window.location.href = '/desktop';
  }

  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/test" element={<Playground/>} />
          <Route path="/desktop" element={<DesktopWarning/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
