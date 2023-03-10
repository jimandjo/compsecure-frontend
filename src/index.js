import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
