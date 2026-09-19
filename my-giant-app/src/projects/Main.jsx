import React from "react";
import logo from "../assets/vite.svg";
import smbars from "../assets/smbars.svg";
import image1 from "../assets/first-image.png"
import slide1 from "../assets/10008.png"
import slide2 from "../assets/10009.png"
import slide3 from "../assets/10010.png"
import slide4 from "../assets/10011.png"
import hero from "../assets/hero.png"

const Main = () => {
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

            <a href="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-15 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Home</a>
            <a href="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-15 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Service</a>
            <a href="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-18 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Our Work</a>
            <a href="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-18 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">About Us</a>
            <a href="#" className="min-[20px]:hidden min-[1024px]:block lg:hover:border-b-3 lg:rounded-md lg:active:border-b-2 lg:active:rounded-2xl lg:transiton lg:duration-100 lg:linear lg:border-white lg:h-8 lg:w-15 lg:text-sm lg:flex items-center lg:justify-center  lg:font-bold ">Contact</a>

          </div>
          <button type="button" className="min-[20px]:hidden lg:block lg:w-40 lg:cursor-pointer  lg:rounded-sm lg:h-10 lg:border lg:border-[#ec711e] lg:text-[14px]">LET's TALk  <span clasName="">&#8594;</span> </button>

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
              <p className="text-4xl font-semibold lg:text-5xl md:text-5xl ">We Elevate <span className="bg-linear-to-r from-indigo-500 via-[#f35c14] to-[#ec701ea6] bg-clip-text text-transparent">Brands.</span></p>
              <h1 className="w-full my-5 lg:w-100">Giants is a creative graphic design and photo editing company that helps businesses stand aut with powerfull
                visuals.
              </h1>

              <div className="w-full h-40  flex flex-col items-start gap-5 md:flex md:flex-row  md:h-15 sm:flex sm:flex-row  sm:h-15 lg:w-100">
                <button type="button" className=" cursor-pointer w-full text-white text-xl font-semibold h-12 rounded-md backdrop-blur-xl bg-linear-to-r from-[#eb640aa6] to-[#ec403b] hover:bg-[#f16d14a6] ">Our Service &#8594;</button>
                <button type="button" className=" cursor-pointer w-full text-white text-xl font-semibold h-12 rounded-md  border border-white md:border-2 md:backdrop-blur-md">View Our Work</button>
              </div>
            
            </div>
            <div className="mx-2 h-150 md:w-200 md:h-120  md:mx-0 sm:w-200 sm:120">
            <img src={image1} className=" rounded-md w-full  md:w-full md:absolute md:top-0 md:rounded-0 md:right-0 md:-z-10 md:h-120 object-cover
            sm:w-full sm:absolute sm:top-0 sm:rounded-0 sm:right-0 sm:-z-10 sm:h-120 sm:object-cover
            " />
            </div>
          </div>
          {/* continue sliding section */}

          <div className="w-full h-25 bg-[#101011ee] backdrop-grayscale-50 sm:relative sm:bottom-0 md:relative md:bottom-0 lg:relative lg:bottom-0 xl:relative xl:bottom-0 2xl:relative 2xl:bottom-0  relative bottom-5  flex flex-row items-center justify-center wrap-normal gap-5 overflow-hidden ">
            <div className="h-full px-4 animate-pulse animate-x-spin w-full flex flex-row items-center justify-around wrap-normal gap-5 overflow-hidden">
            <img src={slide1} alt="" />
            <img src={slide2} alt="" />
            <img src={slide3} alt="" />
            <img src={slide4} alt="" />
            </div>

          </div>
          {/* continue servicw section */}
          

          
        </div>
        
      </div>
  )
};

export default Main;
