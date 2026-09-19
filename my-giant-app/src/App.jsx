import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './projects/Main'
import Home from './projects/pages/Home'
import Service from './projects/pages/Service'
import Work from './projects/pages/Work'
import Contact from './projects/pages/Contact'

function App() {
  

  return (
    <Router>

     <div className="text-white">
      
      <Main/>
    </div>
    
    </Router>
   
  )
}

export default App
