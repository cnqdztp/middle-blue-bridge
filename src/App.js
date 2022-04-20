// import { Feed } from '@mui/icons-material';
import Feed from './Feed';
import './css/App.css';
import Header from './Header';
import BottomNavigationComponent from './BottomNavigation';
// import FabComponent from './FabComponent';


// import { AddIcon } from '@mui/icons-material';

// import PostComponent from './PostComponent';

function App() {
  //TODO: redirect non-mobile users to desktop version
  // Check if is mobile
  // const isMobile = window.innerWidth < 768;

  // if(!isMobile) {
  //   //go to google.com
  //   window.location.href = 'https://www.google.com';
  // }

  return (
    <div className="app">
      <div className='header-sticky'>
        <Header />
      </div>
      <div className='Feed'>
        <Feed />
      </div>
      <div className='BottomNav'>
        <BottomNavigationComponent  />
      </div>
    </div>
  );
}

export default App;
