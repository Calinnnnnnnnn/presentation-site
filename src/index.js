import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'flag-icons/css/flag-icons.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import smoothscroll from 'smoothscroll-polyfill';
import './i18n';

smoothscroll.polyfill();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
