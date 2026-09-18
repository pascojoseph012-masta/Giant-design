import React from "react";
import logo from "../assets/vite.svg";
import smbars from "../assets/smbars.svg";
import image1 from "../assets/first-image.png"

const Main = () => {
  return (
    
      <div className="text-white">
      <div className="flex flex-row w-full h-15 fixed z-50 items-center justify-around gap-25 bg-[#1a1a1a]  
       sm:bg-amber sm:flex sm:flex-row sm:gap-60 md:bg-blue md:flex md:gap-80
       lg:bg-amber lg:flex lg:flex-row  lg:justify-evenly lg:gap-0  
      ">

        <div className="flex flex-row gap-3 w-50 items-center justify-center relative right-10 sm:relative sm:right-15 md:relative md:right-22 "><img src={logo} className="w-7" /> <p className="text-white font-semibold text-xl">Giants</p>  </div>
        <img src={smbars} className="w-5 lg:hidden" />

          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:h-14 lg:bg-slate-500 lg:w-80 ">
            
          </div>

      </div>
        {/* Main content-starting */}

        <div className="w-full h-300   absolute top-15">
          {/* landa holder */}
          <div className="w-full h-200 bg-amber flex flex-col md:bg-amber-  md:w-full md:h-120 md:flex md:flex-row sm:bg-amber *:
           sm:w-full sm:h-120 sm:flex sm:flex-row 
          ">
            <div className=" lg:w-120  h-full bg-indigo- md:h-100 sm:-100 mx-5 my-13 "> 
              
              <p className="text-[#ec711e]">Giants of Design</p> 
              <p className="text-5xl font-semibold">We Design.</p>
              <p className="text-5xl font-semibold">We Edit.</p>
              <p className="text-4xl font-semibold lg:text-5xl md:text-5xl ">We Elevate <span>Brands.</span></p>
              <h1 className="w-full my-5 lg:w-100">Giants is a creative graphic design and photo editing company that helps businesses stand aut with powerfull
                visuals.
              </h1>

              <div className="w-full h-40  flex flex-col items-start gap-5 md:flex md:flex-row  md:h-15 sm:flex sm:flex-row  sm:h-15 lg:w-100">
                <button type="button" className=" w-full text-white text-xl font-semibold h-12 rounded-md bg-[#ec711e] hover:bg-[#ec701ea6] ">Our Service</button>
                <button type="button" className=" w-full text-white text-xl font-semibold h-12 rounded-md  border border-white md:border-2 md:backdrop-blur-md">View Our Work</button>
              </div>
            
            </div>
            <div className="mx-2 h-150 md:w-200 md:h-120  md:mx-0 sm:w-200 sm:120">
            <img src={image1} className=" rounded-md w-full  md:w-full md:absolute md:top-0 md:rounded-0 md:right-0 md:-z-10 md:h-120 object-cover
            sm:w-full sm:absolute sm:top-0 sm:rounded-0 sm:right-0 sm:-z-10 sm:h-120 sm:object-cover
            " />
            </div>
          </div>
          {/* continue */}
        </div>
        
      </div>
  )
};

export default Main;
