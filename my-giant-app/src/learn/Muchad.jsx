import React from 'react'
import react from '../assets/react.svg'
const Muchad = () => {
  return (
    <div class="text-white"> 
      <div class="text-2xl flex flex-row justify-around items-center h-20 w-full  bg-slate-900 "> 
        <div class="text-2xl flex flex-row justify-center items-center font-mono gap-5"><img src={react} className="w-10 object-cover" /><p>Testing</p></div>

        <div class="text-2xl flex flex-row justify-center items-center gap-5 w-20 h-20">
        <a href class="text-2xl transition-duration-300 active:border-b-2 hover:border-b-sky-300">home</a>
        <a href class="text-2xl transition-duration-300 active:border-b-2 hover:border-b-sky-300">about</a>
        <a href class="text-2xl transition-duration-300 active:border-b-2 hover:border-b-sky-300">contact</a>
        <a href class="text-2xl transition-duration-300 active:border-b-2 hover:border-b-sky-300">services</a>
        </div>
         <div class="text-2xl flex flex-row justify-center items-center  h-20 gap-5">
              <button class="text-2xl flex items-center justify-center rounded-2xl w-35 h-full bg-blue-500">Login</button>
              <button class="text-2xl flex items-center justify-center rounded-2xl w-35 h-full bg-blue-500">Register</button>
            </div>
      </div>
    </div>
  )
}

export default Muchad