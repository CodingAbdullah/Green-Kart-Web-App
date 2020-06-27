import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Component/Navbar/navbar';
import Footer from '../src/Component/Footer/footer';
import Homepage from '../src/Component/HomePage/homepage';
import Login from '../src/Component/Login/login';
import Signup from '../src/Component/Signup/signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productgrid from './Component/Productgrid/productgrid';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/signup" component={Signup} />
          <Route exact={true} path="/productPricing" component={Productgrid} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
