import React from 'react';
import ProductList from "./pages/ProductList";
import Home from './pages/Home';
import Products from "./pages/ProductInfo"
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from "./pages/Cart";
import TrainingPage from "./pages/TrainingPage";
import LandingPage from './pages/LandingPage';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

 


function App() {
  return (

    //this is where i started my rrouting called every page here and distributed it 
    
         <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route  path="/HomeIN" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/TrainingPage" element={<TrainingPage />} />
        <Route path="/ProductList" element={< ProductList />} />
        
      </Routes>
    </Router>

    
    
  )
}
 
export default App