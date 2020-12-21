import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Layout from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Layout>
     <h1> hello dosto </h1>
    </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

