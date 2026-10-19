import { isPrimaryPointer } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import pertner1 from "../../assets/pertner1.jpeg"
import pertner2 from "../../assets/pertner2.jpeg"
import pertner3 from "../../assets/pertner3.jpeg"
import pertner4 from "../../assets/pertner4.jpeg"
import pertner6 from "../../assets/pertner6.jpeg"
import pertner7 from "../../assets/pertner7.jpeg"
import pertner8 from "../../assets/pertner8.jpeg"
import facebook from "../../assets/facebook.jpg"
import phone from "../../assets/phone.svg"
import location from "../../assets/location.svg"
import email from "../../assets/email.svg"
import google from "../../assets/google.jpg"
import instgram from "../../assets/instgram.jpg"
import netflix from "../../assets/netflix.jpg"
import whatup from "../../assets/what'sup.jpg"
import tewtter from "../../assets/tewtter.jpg"
import logo1 from "../../assets/logo1.jpeg"
import { Content } from "../../assets/slide"
import { motion, useAnimationControls, useInView, AnimatePresence, } from "framer-motion";
import { div } from 'framer-motion/client';





const Pertner = ({TalkOpen}) => {
  const [Index, setIndex] = useState (0)
  const duplicateContent = [...Content, ...Content]
  
  return (
    <div>
      <div className="w-full h-auto  bg-[#000000f8] relative top-20 text-white min-[100px]:w-100 min-[400px]:w-full">
        {/* this the part of first pertner */}
       <div className="flex flex-col px-3 w-full h-80 bg-slate- items-center justify-around sm:bg-slate  ">
        <p className="text-5xl text-[#ec701ed5] text-center sm:w-100 md:w-100 lg:w-full xl:w-full min-[200px]:text-[40px] min-[400px]:text-5xl ">Join The Pertners Of Giant  </p>
        <h1 className="text-md text-center font-medium sm:w-120 md:w-120 lg:w-150 xl:w-150">Join the pertnership with the Giant The company that maintain Upgrade and Retain the Identity and story of your bussiness brand through our Epic branding Designing and printing Expertise</h1>
        <button type="button" onClick={TalkOpen} className=" sm:w-100 md:w-100 lg:w-65 xl:w-65 cursor-pointer w-full text-white text-xl font-semibold h-12 rounded-md backdrop-blur-xl bg-linear-to-r from-[#eb640aa6] to-[#ec403b] hover:bg-[#f16d14a6] ">LET'S TALK &#8594;</button>

       </div>
        {/*  first pertner end */}
        {/* the container for cards pertner */}
        <div className="w-full h-18 flex items-center justify-center bg-slate"><p className="text-5xl text-white text-center font-bold">Our Pertners</p></div>
       {/* card container */}
      <div className="flex flex-col items-start justify-start gap-5 mt-6 border-zinc-800 border-b  w-full h-450  bg-[#080808d7] group px-3 
      sm:grid sm:grid-cols-2 sm:items-center sm:justify-start sm:gap-5 sm:h-auto
      md:grid md:grid-cols-2 md:items-center md:justify-start md:gap-5 mdsz
      lg:grid lg:grid-cols-2 lg:items-center lg:justify-start lg:gap-5 lg:px-10
      
      ">
        {/* card start */}
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner1} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-center  object-center" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner2} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-center  object-center" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner3} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-cover  object-cover" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner4} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-cover  object-cover" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner6} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-center  object-center" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner7} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-center  object-center" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner8} className="w-full h-full lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out lg:object-cover  object-cover" /> </div>
         <div className="w-full h-60 lg:h-100 rounded-xl bg-[#101011ee] overflow-hidden flex items-center justify-center"> <img src={pertner3} className="w-full h-full ob lg:hover:scale-101 transition cursor-pointer  duration-100 ease-in-out object-cover lg:object-cover   " /> </div>
      </div>
      
       {/* card container */}
       {/* sliding log start */}
      <div className="w-full h-45 bg-[#000000f8] flex flex-row overflow-hidden  items-center justify-center mt-0">
       <div className="w-full h-30 items-center justify-center  flex">
        <motion.div
        animate={{x: ["0%", "-100%"]}}
        transition={{
                duration: "25",
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                type: "tween",
               
              }}
        className="flex flex-row gap-5 bg-[#101011ee]  h-50 items-center justify-center place-content-center"
        >
          {duplicateContent.map((Content, Index) => {
            return(
              <div key={`${Content.id}-${Content.id}`}>
                <img src={Content.image} className="max-w-70 object-cover" />
              </div>
            )
          })}
        </motion.div>

         <motion.div
        animate={{x: ["0%", "-100%"]}}
        transition={{
                duration: "25",
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                type: "tween",
               
              }}
        className="flex flex-row gap-5 bg-[#101011ee] h-50 items-center justify-center place-content-center"
        >
          {duplicateContent.map((Content, Index) => {
            return(
              <div key={`${Content.id}-${Content.id}`}>
                <img src={Content.image} className="max-w-70 object-cover" />
              </div>
            )
          })}
        </motion.div>

           <motion.div
        animate={{x: ["0%", "-100%"]}}
        transition={{
                duration: "25",
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                type: "tween",
               
              }}
        className="flex flex-row gap-5 bg-[#101011ee] h-50 items-center justify-center place-content-center"
        >
          {duplicateContent.map((Content, Index) => {
            return(
              <div key={`${Content.id}-${Content.id}`}>
                <img src={Content.image} className="max-w-70 object-cover" />
              </div>
            )
          })}
        </motion.div>
        
       </div>

  
      </div>
       {/* sliding log end */}
            {/* footer start */}
          <div className="w-full h-300 flex flex-col  gap-5 px-3 items-center border-zinc-800 border-t justify-evenly sm:grid sm:grid-cols-2 sm:h-170 sm:gap-5 md:grid md:grid-cols-2 md:h-170 md:gap-5
            lg:flex lg:flex-row lg:h-70 min-[100px]:w-100 min-[400px]:w-full
           ">
            {/*footer cards start  */}
            <div className="w-full h-60 flex flex-col justify-evenly px-3 border-l border-zinc-800 lg:border-none">
              <p className="bg-linear-to-r from-indigo-500 text-5xl  via-[#f35c14] to-[#ec701ea6] bg-clip-text text-transparent">GAINT.</p>
              <h1 className="text-left text-sm text-gray-100 font-bold w-70 ">We design. We edit. we elevate brands Turning creative ideas into powerful visual for modern businesses.</h1>
                <div className="flex flex-row gap-10 sm:flex sm:gap-7  ">
                <img src={facebook} className="w-16 rounded-full " />  
                <img src={instgram} className="w-16 rounded-full" />  
                <img src={netflix} className=" w-16 rounded-full sm:hidden md:block lg:hidden" />  
                <img src={whatup} className="  w-16 rounded-full" />  
                </div>    
            </div>

            <div className=" w-full h-60 flex flex-col gap-5 px-3 border-l border-zinc-800 lg:border-none">
              <p className="text-white font-semibold text-xl">Quick Links</p>
              <div className="flex flex-col mt-2 gap-5">
                
                <Link to="/" className="text-white cursor-pointer font-semibold">Home</Link>
                <Link to="/Service" className="text-white cursor-pointer font-semibold">Services</Link>
                <Link to="/pertner" className="text-white cursor-pointer font-semibold">Our Pertner</Link>
                <Link to="#" className="text-white cursor-pointer font-semibold">Our Carrer</Link>
              </div>

            </div>

              <div className=" w-full h-60 flex flex-col gap-5  px-3 border-l border-zinc-800 lg:border-none">
              <p className="text-white font-semibold text-xl">Services</p>
              <div className="flex flex-col mt-2 gap-5">
                <p>Graphic Design</p>
                <p>Branding</p>
                <p>Design</p>
                <p>Printing</p>
              </div>

            </div>

            <div className=" w-full h-60 flex flex-col gap-5  px-3 border-l border-zinc-800 lg:border-none ">
              <p className="text-white font-semibold text-xl">Get in Touch</p>
              <div className="flex flex-col mt-2 gap-2">
                <div className="w-full h-14 flex flex-row gap-5 items-center "><img src={location} className="w-8" /> <p className="w-60">kigali . nyarugenge . rubangura House . Giants Studio</p> </div>
                <div className="w-full h-14 flex flex-row gap-5 items-center "><img src={email} className="w-8" /> <p className="w-60">giantdesign2022@gmail.com</p> </div>
                <div className="w-full h-14 flex flex-row gap-2 items-start  ">
               <div><img src={phone} className="w-8 mt-1" /></div>
               <div className="flex flex-col   justify-center">
                 <p className="w-60">+250 722705501</p>
                 <p className="w-60">+250 786236112</p>
               </div>
                </div>
              </div>

            </div>

            
            {/*footer cards end  */}

          </div>
          {/* footer end */}
          <div className="px-3">
          <div className="w-full h-60 flex flex-col justify-around items-center border-t border-zinc-800 px-3 sm:flex sm:flex-row sm:gap-20 sm:h-35 md:h-30
          lg:h-20 lg:gap-170 min-[100px]:w-95 min-[400px]:w-full
          ">

              <p>2026 Giants. All right reserved.</p>
              <div className="w-80 h-13 flex flex-row items-center justify-center  ">
                <div className="w-full h-13 items-center flex justify-center border-r  border-zinc-800"><p className="font-semibold text-semibold text-lg">Privacy Policy</p></div>
                <div className="w-full h-13 items-center flex justify-center lg:h-5 "><p className="font-semibold text-semibold text-lg ">Terms Of Service</p></div>
              </div>

          </div>

          </div>
          {/* end footer */}
      </div>
        
    </div>
  )
}

export default Pertner