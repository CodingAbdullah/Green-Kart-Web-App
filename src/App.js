import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/navbar';
import Footer from './Component/Footer/footer';
import HomePage from './Component/HomePage/homepage';
import Login from './Component/Login/login';
import SignUp from './Component/SignUp/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './Component/ProductGrid/productgrid';
import OrderCheckout from './Component/OrderCheckout/ordercheckout';
import OrderHistory from './Component/OrderHistory/orderhistory';
import Logout from './Component/Logout/logout';
import UpdateProfilePage from './Component/UpdateProfilePage/updateprofilepage';
import ResetPasswordPage from './Component/ResetPasswordPage/resetpasswordpage';

const App = () => {
  
  // Update Component rendering to appropriate route
  return (
    <Router>
        <div className="App">
          <Navbar />
            <Routes>
            <Route path="/checkout" element={<OrderCheckout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/reset-password-page" element={<ResetPasswordPage />}></Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product-pricing" element={<ProductGrid />} />
              <Route path="/update-profile-info" element={<UpdateProfilePage />}></Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          <Footer />
        </div>
     </Router>
  );
}

export default App;