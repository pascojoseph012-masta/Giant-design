import React from 'react'
import { Link } from 'react-router-dom';
import close from '../assets/close2.svg'

const ModelLink = ({ClosePopup, TalkOpen}) => {
  return (
    <div className="text-white">
        <div onClick={ClosePopup}  className="w-full h-250 fixed z-100 top-0 backdrop-blur-xl flex flex-col ">
            <div className="w-full h-15 flex items-end justify-end px-4 py-2 ">
                <button type="button" onClick={ClosePopup} className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white "><img src={close} className="w-5 object-cover " /></button>
            </div>
            <div className="h-100 w-full  flex flex-col items-start gap-13 mt-10 px-5 ">
                <Link to="/" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3" onClick={ClosePopup}>Home</Link>
                <Link to="/Service" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3" onClick={ClosePopup}>Service</Link>
                <Link to="/Service" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3">Our Work</Link>
                <Link to="#" className="h-25 w-full text-lg font-medium rounded-full flex items-center backdrop-blur-3xl shadow-sm shadow-zinc-800 px-3">About Us</Link>
            </div>
            <div className="px-3 w-full h-auto">
            <button type="button" onClick={TalkOpen} className="w-full h-15 border border-[#ec711e] backdrop-blur-2xl text-xl font-medium rounded-md mt-10 px-5">LET'S TALK</button>
            </div>

        </div>
    </div>
  )
}

export default ModelLink