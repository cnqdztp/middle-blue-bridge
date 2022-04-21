import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import cloudbase from "@cloudbase/js-sdk";

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// const cbApp = cloudbase.init({
//   env: "hello-cloudbase-5gt2hqaddac2d0bc"
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

