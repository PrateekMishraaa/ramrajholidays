import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Package from './Pages/Package'
import SightSeeing from './Pages/SightSeeing'
import CharDham from './Pages/CharDham'
import Payment from './Pages/Payment'
import Contact from './Pages/Contact'
import SignUp from './Pages/SignUp'
import Signin from './Pages/Signin'


// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  
  if (!token) {
    // Redirect to sign in page if not authenticated
    return <Navigate to="/signin" replace />;
  }
  
  return children;
};

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  
  useEffect(() => {
    // Check authentication on component mount and token change
    const token = localStorage.getItem("authToken");
    console.log(token);
    setAuthenticate(!token);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          
          {/* Protected routes */}
          <Route path='/package' element={
            <ProtectedRoute>
              <Package />
            </ProtectedRoute>
          } />
          <Route path='/sight-seeing' element={
            <ProtectedRoute>
              <SightSeeing />
            </ProtectedRoute>
          } />
          <Route path='/chardham' element={
            <ProtectedRoute>
              <CharDham />
            </ProtectedRoute>
          } />
          <Route path='/payment' element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          } />
    
          <Route path='/contact-us' element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } />
          
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App