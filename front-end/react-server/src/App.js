import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Productgrid from '../src/Component/Productgrid/productgrid';
import Signup from '../src/Component/Signup/signup';
import Login from '../src/Component/Login/login';
import Navbar from '../src/Component/Navbar/navbar';
import Footer from '../src/Component/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
