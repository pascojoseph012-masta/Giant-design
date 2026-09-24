import React from 'react'
import logo from "../assets/vite.svg";
import smbars from "../assets/smbars.svg";
import {Link} from "react-router-dom"

const Nav = () => {
    
  return (
    <div className="text-white">
        <div className="flex flex-row w-full h-15 fixed z-50 items-center justify-around gap-25 bg-[#020202d7] 
      backdrop-blur-xl border-b border-y-zinc-800 
       sm:bg-amber sm:flex sm:flex-row sm:gap-60 md:bg-blue md:flex md:gap-80
       lg:bg-amber lg:flex lg:flex-row  lg:justify-evenly lg:gap-0  xl:flex xl:flex-row  lg:backdrop-blur-xl lg:border-b lg:border-y-zinc-800
       sm:backdrop-blur-xl sm:border-b sm:border-y-zinc-800 md:backdrop-blur-xl md:border-b md:border-y-zinc-800 
       ">

        <div className="flex flex-row gap-3 w-50 items-center justify-center relative right-10 sm:relative sm:right-15 md:relative md:right-22 lg:relative lg:right-20 xl:relative xl:right-35 2xl:relative 2xl:right-45 "><img src={logo} className="w-7" /> <p className="text-white font-semibold text-xl">Giants</p>  </div>
        <img src={smbars} className="w-5 lg:hidden" />

          <div className=" min-[20px]:hidden lg:flex lg:flex-row lg:gap-10 lg:items-center lg:justify-center lg:h-14  lg:w-120 sm:hidden md:hidden 
          
          ">

            <Link to="/" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-15 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Home</Link>
            <Link to="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-15 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Service</Link>
            <Link to="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-18 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Our Work</Link>
            <Link to="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-18 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">About Us</Link>
            <Link to="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-15 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Contact</Link>
                
          </div>
          <button type="button" className="min-[20px]:hidden lg:block lg:w-40 lg:cursor-pointer  lg:rounded-sm lg:h-10 lg:border lg:border-[#ec711e] lg:text-[14px]">LET's TALk  <span clasName="">&#8594;</span> </button>

      </div>
    </div>
  )
}

export default Nav