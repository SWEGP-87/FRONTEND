// import React from 'react';
// import ProductList from "./pages/ProductList";
// import Home from './pages/Home';
// import Products from "./pages/ProductInfo"
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Cart from "./pages/Cart";
// import TrainingPage from "./pages/TrainingPage";
// import LandingPage from './pages/LandingPage';
// import ServicePage from './pages/ServicePage';
// import FAQPage from './pages/FAQPage';
// import ContactPage from './pages/ContactPage'; 


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';

 


// function App() {
//   return (

//     //this is where i started my rrouting called every page here and distributed it 
    



//          <Router>
          
//           <Navbar/>
//       <Routes>
     
//       <Route exact path="/" element={<LandingPage/>} />
//       <Route  path="/HomeIN" element={<Home/>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Cart" element={<Cart />} />
      
//           <Route path="/Register" element={<Register />} />
          
       
//         <Route path="/TrainingPage" element={<TrainingPage />} />
//         <Route path="/ProductList" element={< ProductList />} />
//         <Route path="/ServicePage" element={< ServicePage />} />
//         <Route path="/FAQPage" element={< FAQPage />} />
//         <Route path="/ContactPage" element={< ContactPage/>} />
        
//       </Routes>
//     </Router>

    
    
//   )
// }
 
// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import ProductList from "./pages/ProductList";
import Home from './pages/Home';
import Products from "./pages/ProductInfo";
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from "./pages/Cart";
import TrainingPage from "./pages/TrainingPage";
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithNavbar />}>
          <Route index element={<LandingPage />} />
          <Route path="HomeIN" element={<Home />} />
        
          <Route path="Cart" element={<Cart />} />
          <Route path="TrainingPage" element={<TrainingPage />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="ServicePage" element={<ServicePage />} />
          <Route path="FAQPage" element={<FAQPage />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="AboutPage" element={<AboutPage />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function WithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;