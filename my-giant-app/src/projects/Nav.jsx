import React from 'react'
import logo from "../assets/vite.svg"
import smbars from "../assets/smbars.svg"



const Nav = () => {
  return (
    <div className="text-white ">

        <div className="w-full h-15  flex flex-row justify-around items-center sm:bg-amber-800 gap-40">
            <div className="flex flex-row gap-3 items-center justify-center"> <img src={logo} className="w-7" /> <p className="text-2xl font-sans">Gaints</p> </div>
            <img src={smbars} className="w-5" />
        </div>

        <div className="w-full h-130 mt-20 bg-slate flex flex-col px-8">
            <p className="text-[#dc690b] tex-lg font-bold">We are Gaints of Design</p>
            <p className="text-white text-5xl font-bold">We Design</p>
            <p className="text-white text-5xl font-bold">We Edit.</p>
            <p className="text-white text-5xl font-bold">We Elevate <span>Brands.</span></p>

            <h1 className="text-gray-50 my-3 font-semibold text-md">Giants is a Creative graphic design and photo editing company that 
              helps businesses stand out with powerfull visual. 
              </h1>
            <div className="flex flex-col gap-5 items-start justify-start w-full h-40  my-5">
              <button type="button" className="w-80  h-13 rounded-md text-white font-semibold text-xl flex items-center justify-center bg-[#dc690b] transition duration-300 ease-in-out hover:bg-[#dc690ba9] cursor-pointer ">Our Service  &#12297;</button>
              <button type="button" className="w-80  h-13 rounded-md text-white font-semibold text-xl flex items-center justify-center border border-[#dc690b] ">View Our Work </button>
            </div>
        </div>

    </div>
  )
}

export default Nav