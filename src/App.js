import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/SignUpPage/SignUpPage';
import MemberLandingPage from './Pages/MemberLandingPage/MemberLandingPage';
import SellFood from './Pages/SellFoodPage/SellFoodPage';
import Shop from './Pages/ShopPage';
import CheckOut from './Pages/CheckOutPage/CheckOutPage';
import './app.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Member" element={<MemberLandingPage/>}/>
        <Route path="/SellFood" element={<SellFood/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/CheckOut" element={<CheckOut/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App