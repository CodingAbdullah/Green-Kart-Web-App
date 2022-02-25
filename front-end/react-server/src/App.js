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
import { Provider } from 'react-redux';
import { store }  from './redux/store/store';

const App = () => {

  return (
        <Provider store={store} >
          <Router>
            <div className="App">
              <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/productPricing" element={<ProductGrid />} />
                </Routes>
              <Footer />
            </div>
          </Router>
        </Provider>
      );
  }

export default App;
