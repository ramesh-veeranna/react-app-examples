import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// set default settings or common settings
import axios from 'axios';
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.baseURL = 'http://localhost/api/public/api/';
// axios.defaults.headers.common['Authorization'] = 'Bearer 2|F9bGazComqI48dnP34cEMAXep0eUgiwnQiz1vlbsB67GIuYB';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
