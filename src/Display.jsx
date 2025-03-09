import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home2 from './pages/Home2'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Footer from './pages/Footer'
import Countries from './component/Countries'

const Display = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route index element={<Home2 />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="country" element={<Countries />} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default Display
