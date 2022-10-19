import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './components/Product';
import Layout from './components/Layout';
//componente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout/>    
      <Routes>
        <Route path='/'  element={<App />}/>
        <Route path='/product'  element={<Product />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();