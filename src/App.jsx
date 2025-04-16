import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Package from './Pages/Package'
import SightSeeing from './Pages/SightSeeing'
import CharDham from './Pages/CharDham'
import Payment from './Pages/Payment'
import Contact from './Pages/Contact'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/package' element={<Package/>}/>
      <Route path='/sight-seeing' element={<SightSeeing/>}/>
      <Route path='/chardham' element={<CharDham/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
