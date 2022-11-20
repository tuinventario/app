import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";

import Product from './components/Product';
import Layout from './components/Layout';
import Shopping from './components/Shopping';
import Sales from './components/Sales';
import ProductBuy from './components/ProductBuy';
import EditProduct from './components/EditProduct';
import Register from './components/Register';
import Login from './components/Login';
import { Provider } from "react-redux";
import store from "./store";
//componente

const root = ReactDOM.createRoot(document.getElementById('root'));
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  console.log(localStorage.jwtToken)
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
root.render(
  <React.StrictMode>
    <Router>
      
      <Provider store={store}>
      <Layout/>  
      <Router>
        <Route exact path='/'  component={App}/>
        <Route exact path='/Login'  component={Login}/>
        <Route exact path='/Register'  component={Register}/>
        
        <Route  path='/product'  component={Product}/>
        <Route  path='/shopping'  component={Shopping}/>
        <Route  path='/sales'  component={Sales}/>
        <Route  path='/productBuy'  component={ProductBuy}/>
        <Route  path='/editProduct'  component={EditProduct}/>
       
      </Router>
      </Provider> 
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
