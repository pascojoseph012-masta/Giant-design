import React from 'react'
import { Link } from 'react-router-dom';
import close from '../assets/close2.svg'
import { motion, AnimatePresence } from 'framer-motion';

const ModelLink = ({ClosePopup, TalkOpen}) => {
  return (
    <div className="text-white">
        <AnimatePresence mode="wait">
        <motion.div 

         initial={{ x: '100%' }} // Start off-screen to the left
          animate={{ x: 0 }}       // Slide into view
          exit={{ x: '-100%' }}    // Slide back out
          transition={{ 
            type: 'tween',         // Disables physics, enables CSS timeline
            duration: 0.4,         // Animation duration in seconds
            ease: 'easeInOut'      // Standard CSS easing curve
          }}
        layout
        className="w-full h-250 fixed z-100 top-0 backdrop-blur-xl flex flex-col ">
            <div className="w-full h-15 flex items-end justify-end px-4 py-2 ">
                <button type="button" onClick={ClosePopup} className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white "><img src={close} className="w-5 object-cover " /></button>
            </div>
            <div className="h-100 w-full  flex flex-col items-start gap-13 mt-10 px-5 ">
                <Link to="/" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3" onClick={ClosePopup}>Home</Link>
                <Link to="/Service" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3" onClick={ClosePopup}>Service</Link>
                <Link to="/pertner" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3" onClick={ClosePopup}>Our Pertners</Link>
                <Link to="/Carrer" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3" onClick={ClosePopup}>Our Carrer</Link>
            </div>
            <div className="px-3 w-full h-auto">
            <button type="button" onClick={TalkOpen} className="w-full h-15 border border-[#ec711e] backdrop-blur-2xl text-xl font-medium rounded-md mt-10 px-5">LET'S TALK</button>
            </div>

        </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default ModelLink