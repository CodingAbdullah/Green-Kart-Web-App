import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from '../src/Component/HomePage/homepage';
import Productgrid from '../src/Component/Productgrid/productgrid';

function App() {
  return (
    <div className="App">
      <Productgrid />
    </div>
  );
}

export default App;
