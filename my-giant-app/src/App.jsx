import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './projects/Main'
import Home from './projects/pages/Home'
import Service from './projects/pages/Service'
import Nav from './projects/Nav'
import ScrollToTop from './projects/ScrollToTop';
import Muchad from './learn/Muchad';
import ModelLink from './projects/ModelLink'
import ModelTalk from './projects/ModelTalk'
import Pertner from './projects/pages/Pertner'
import Carrer from './projects/pages/Carrer'



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
        <Route path="/Service" element={<Service ClosePopup={ClosePopup} TalkOpen={TalkOpen}/>}/>
        <Route path="/Pertner" element={<Pertner  TalkOpen={TalkOpen}/>}/>
        <Route path="/Carrer" element={<Carrer/>}/>
       
      </Routes>
     
      
    
    </Router>
   
  )
}

export default App
