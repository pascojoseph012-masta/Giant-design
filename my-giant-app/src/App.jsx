import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './projects/Main'
import Home from './projects/pages/Home'
import Service from './projects/pages/Service'
import Work from './projects/pages/Work'
import Contact from './projects/pages/Contact'
import Nav from './projects/Nav'
import About from'./projects/pages/About'

function App() {

  

  return (
   
    <Router>
       <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
     
      
    
    </Router>
   
  )
}

export default App
