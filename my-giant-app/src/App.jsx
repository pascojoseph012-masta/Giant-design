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
import ScrollToTop from './projects/ScrollToTop';
import Muchad from './learn/Muchad';
import ModelLink from './projects/ModelLink'
import ModelTalk from './projects/ModelTalk'


function App() {

   const [PopupOption, setPopupOption] = useState(false)
   const ClosePopup = () => {
    setPopupOption(false)
   }
   const OpenPopup = () => {
    setPopupOption(true)
   }
    
   const [TalkOption, setTalkOption] = useState(false)
   
   const TalkOpen = () => {
    setTalkOption(true)
   }

   const TalkClose = () => {
    setTalkOption(false)
   }
   
  

  return (
    <Router>
     {/* <Muchad/> */}
     { PopupOption && <ModelLink ClosePopup={ClosePopup} TalkOpen={TalkOpen}/>}
     { TalkOption && <ModelTalk TalkClose={TalkClose} />}
       {<Nav OpenPopup={OpenPopup} TalkOpen={TalkOpen}/>}
       
        

      <Routes>
        <Route path="/" element={<Main TalkOpen={TalkOpen}/>}/>
        <Route path="/Service" element={<Service ClosePopup={ClosePopup}/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
     
      
    
    </Router>
   
  )
}

export default App
