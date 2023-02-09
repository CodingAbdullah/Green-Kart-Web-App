import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Component/Navbar/navbar';
import Footer from '../src/Component/Footer/footer';
import HomePage from '../src/Component/HomePage/homepage';
import Login from '../src/Component/Login/login';
import SignUp from '../src/Component/SignUp/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './Component/ProductGrid/productgrid';
import OrderCheckout from './Component/OrderCheckout/ordercheckout';
import OrderHistory from './Component/OrderHistory/orderhistory';

const App = () => {

  return (
    <Router>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product-pricing" element={<ProductGrid />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/checkout" element={<OrderCheckout />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          <Footer />
        </div>
     </Router>
  );
}

export default App;