import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Component/Navbar/navbar';
import Footer from '../src/Component/Footer/footer';
import HomePage from '../src/Component/HomePage/homepage';
import Login from '../src/Component/Login/login';
import SignUp from '../src/Component/SignUp/signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductGrid from './Component/ProductGrid/productgrid';
import BillSummary from './Component/BillSummary/billsummary';
import ShopRecord from './Component/ShopRecord/shoprecord';
import  { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware())

class App extends Component {

  render(){
      
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Navbar />
                <Switch>
                  <Route exact={true} path="/" component={HomePage} />
                  <Route exact={true} path="/bill" component={BillSummary} />
                  <Route exact={true} path="/login" component={Login} />
                  <Route exact={true} path="/signup" component={SignUp} />
                  <Route exact={true} path="/productPricing" component={ProductGrid} />
                </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
      );
  }
}

export default App;
