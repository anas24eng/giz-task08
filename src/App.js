import * as React from 'react';
import NavBar from './Pages/NavBar'
import {Routes, Route} from 'react-router-dom';
import DashBoard from './Pages/Dashboard';
import Products from './Pages/Products';
import Category from './Pages/Category';


function App() {
  return (
  
      
  
    <div className="app">
    <Routes> 
      
      <Route exact path="/" element={< NavBar/>}/> 
      <Route exact path="/Dashboard" element={< DashBoard/>}/>
      <Route exact path="/Category" element={< Category/>}/>
      <Route exact path="/Products" element={< Products/>}/>


    </Routes>
      
      
      
    </div>
  
  );
}

export default App;
