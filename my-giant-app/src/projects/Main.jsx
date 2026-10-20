import React, { useState } from "react";
import {Link} from "react-router-dom"
import { motion, useAnimationControls, useInView, AnimatePresence, } from "framer-motion";
import logo from "../assets/vite.svg";
import smbars from "../assets/smbars.svg";
import image1 from "../assets/first-image.png"
import image2 from "../assets/second-image.png"
import slide1 from "../assets/10008.png"
import slide2 from "../assets/10009.png"
import slide3 from "../assets/10010.png"
import slide4 from "../assets/10011.png"
import facebook from "../assets/facebook.jpg"
import google from "../assets/google.jpg"
import instgram from "../assets/instgram.jpg"
import netflix from "../assets/netflix.jpg"
import whatup from "../assets/what'sup.jpg"
import tewtter from "../assets/tewtter.jpg"
import hero from "../assets/hero.png"
import camer1 from "../assets/camer1.jpg"
import camer2 from "../assets/camer2.jpg"
import photo from "../assets/photo.jpg"
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import brand from "../assets/brand.jpg"
import bolt from "../assets/bolt.svg"
import cube from "../assets/cube.svg"
import group from "../assets/group.svg"
import star from "../assets/star.svg"
import clock from "../assets/clock.svg"
import print from "../assets/print.jpg"
import shop from "../assets/shop.jpg"
import branding from "../assets/branding.jpg"
import brandi from "../assets/branding (2).png"
import phone from "../assets/phone.svg"
import location from "../assets/location.svg"
import email from "../assets/email.svg"
import printing from "../assets/printing.jpeg"
import sbranding from "../assets/sbranding.jpeg" 
import logo1 from "../assets/logo1.jpeg"
import logo2 from "../assets/logo2.jpeg"
import adobe from "../assets/adobe.jpg"
import { Content } from "../assets/slide"
import bottle from "../assets/bottles.jpeg"
import cup from "../assets/cups.jpeg"




const Main = ({TalkOpen}) => {
  const [Index, setIndex] = useState (0)
  const duplicateContent = [...Content, ...Content]
  return (
    
      <div className="text-white">
      
        {/* Main content-starting */}

        <div className="w-full h-300   absolute top-15">
          {/* landa holder */}
          <div className="w-full h-200 bg-amber flex flex-col md:bg-amber-  md:w-full md:h-120 md:flex md:flex-row sm:bg-amber 
           sm:w-full sm:h-120 sm:flex sm:flex-row min-[100px]:w-100 min-[400px]:w-full
          ">
            <div className=" lg:w-120  h-full bg-indigo- md:h-100 sm:-100 mx-5 my-13 "> 
              
              <motion.p
              initial={{x: -100}}
              whileInView={{x: 0}}
              transition={{
                duration: 2,
                type: "spring"
              }}
               className="text-[#ec711e]">Giant of Design</motion.p> 
              <motion.p 

               initial={{x: -100}}
              whileInView={{x: 0}}
              transition={{
                duration: 1.5,
                type: "spring"
              }}
              
              className="text-5xl font-semibold">We Design.</motion.p>
              <motion.p 
              
               initial={{x: -100}}
              whileInView={{x: 0}}
              transition={{
                duration: 1,
                type: "spring"
              }}className="text-5xl font-semibold">We Print.</motion.p>
              <p className="text-4xl font-semibold lg:text-5xl md:text-5xl ">We Elevate <span className="bg-linear-to-r from-indigo-500 via-[#f35c14] to-[#ec701ea6] bg-clip-text text-transparent">Brands.</span></p>
              <h1 className="w-full my-5 lg:w-100">Giant The company that maintain Upgrade and Retain the Identity and story of your bussiness brand
              </h1>

              <div className="w-full h-40  flex flex-col items-start gap-5 md:flex md:flex-row  md:h-15 sm:flex sm:flex-row  sm:h-15 lg:w-100">
                <button type="button" onClick={TalkOpen} className=" cursor-pointer w-full text-white text-xl font-semibold h-12 rounded-md backdrop-blur-xl bg-linear-to-r from-[#eb640aa6] to-[#ec403b] hover:bg-[#f16d14a6] ">LET'S TALK &#8594;</button>
                <Link  to="/Service" className=" cursor-pointer w-full text-white text-xl flex items-center justify-center font-semibold h-12 rounded-md  border border-white md:border-2 md:backdrop-blur-md">View Our Service</Link>
              </div>
            
            </div>
            <div className="mx-2 h-150 md:w-200 md:h-120  md:mx-0 sm:w-200 sm:120">
            <img src={image1} className=" rounded-md w-full  md:w-full md:absolute md:top-0 md:rounded-0 md:right-0 md:-z-10 md:h-120 object-cover
            sm:w-full sm:absolute sm:top-0 sm:rounded-0 sm:right-0 sm:-z-10 sm:h-120 sm:object-cover
            " />
            </div>
          </div>
          {/* continue sliding section */}
             {/* sliding log start */}
      <div className="w-full h-45 bg-[#000000f8] flex flex-row overflow-hidden  items-center justify-center mt-0
       min-[100px]:w-100 min-[400px]:w-full 
      ">
       <div className="w-full h-30 items-center justify-center  flex">
        <motion.div
        animate={{x: ["0%", "-100%"]}}
        transition={{
                duration: "50",
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
                duration: "50",
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
                duration: "50",
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
          
          {/* continue service section */}
          <motion.div 
          
          className="w-full h-330 flex flex-col border-b border-zinc-800 items-start justify-start px-4 bg-slate sm:h-200 md:border-b md:border-zinc-600 md:h-190
          lg: lg:h-120 min-[100px]:w-100 min-[400px]:w-full
          ">
            <div className="h-60 w-full  bg-slate flex flex-col items-center justify-center gap-3">
              <h1 className="text-l text-[#ec711e] font-bold ">WHAT WE DO</h1>
              <p className="text-5xl text-white font-bold">Our Services</p>
              <p className="text-white text-sm font-semibold text-center sm:w-100 sm:text-[16px]">We provide end-to-end servises and creative solutions that help your brand communicate, connect, and covert </p>
            </div>
            {/* card service section */}
            <div className="flex flex-col items-center justify-start gap-5 sm:grid sm:grid-cols-2 sm:items-center sm:justify-start  
            md:grid md:grid-cols-2 md:items-center md:justify-start md:gap-5 lg:flex lg:flex-row lg:gap-2 lg:relative lg:bottom-5
            xl:flex xl:flex-row xl:gap-5 
            ">

              <div className="flex flex-col gap- items-center justify-evenly bg-[#0f1011]  py-2 sm:border-2 md:border-2  border border-zinc-800 rounded-md px-3 h-60 ">
                <img src={adobe} className="w-25 rounded-2xl backdrop-opacity-15" />
                <p className="text-lg text-[#ec711e] font-bold">Adobe Illustrator</p>
                <h1 className="text-center text-white font-semibold  ">professional photo retouching manipulation and enhencement service</h1> 
              </div>
              

               <div className="flex flex-col gap- items-center justify-evenly bg-[#0f1011]  py-2 sm:border-2 md:border-2  border border-zinc-800 rounded-md px-3 h-60 ">
                <img src={shop} className="w-30 rounded-2xl backdrop-opacity-15" />
                <p className="text-lg text-[#ec711e] font-bold">Graphic Design</p>
                <h1 className="text-center text-white font-semibold  ">from logos to full brand identities we design visual that speak volumes</h1> 
              </div>

              <div className="flex flex-col gap- items-center justify-evenly bg-[#0f1011]  py-2  sm:border-2 md:border-2  border border-zinc-800 rounded-md px-3 h-60 ">
                <img src={sbranding} className="w-25 h-18 rounded-2xl backdrop-opacity-15 " />
                <p className="text-lg text-[#ec711e] font-bold">Branding</p>
                <h1 className="text-center text-white font-semibold  ">We make brands and writes on any thing from small businesses to big businesses</h1> 
              </div>

              <div className="flex flex-col gap- items-center justify-evenly bg-[#0f1011]  py-2 sm:border-2 md:border-2   border border-zinc-800 rounded-md px-3 h-60 ">
                <img src={printing} className="w-25 rounded-2xl backdrop-opacity-15" />
                <p className="text-lg text-[#ec711e] font-bold">Printing</p>
                <h1 className="text-center text-white font-semibold ">Premium print finishes including foil stamping, embossing, and luxury cardstocks</h1> 
              </div>

            </div>
          </motion.div>
          {/* Our work section */}
          <div className="w-full h-480 bg-slate flex flex-col px-3 2xl:px-15 mt-15 sm:h-270 md:h-270 border-b border-zinc-800 
          min-[100px]:w-100 min-[400px]:w-full
          ">
            <div className="h-55 bg-amber flex flex-col items-center justify-start gap-2">
               <p className="text-lg text-[#ec711e] font-bold">OUR WORK</p>
              <h1 className="text-5xl text-white font-bold text-center ">Featured Projects</h1>
              <h1 className="text-center text-2sm sm:w-100">Explore some of our recent work and see how we turn ideas into powerfull visual stories</h1>
            </div>
            {/* card work section */}
            <div className=" flex flex-col items-center justify-start gap-5 sm:grid sm:grid-cols-2 sm:items-center sm:justify-center
            md:grid md:grid-cols-2 md:items-center md:justify-center lg:grid lg:grid-cols-2 lg:items-center lg:justify-start
            xl:grid xl:grid-cols-2 xl:items-center xl:justify-start 2xl:grid 2xl:grid-cols-2 2xl:items-center 2xl:justify-start
            ">
              {/* card */}
              <div className=" border bg-[#0f1011] group border-zinc-800 flex flex-col h-100 w-full  ">
                <div className="w-full h-85 overflow-hidden "> <img src={bottle} className="w-full h-75 object-cover group-hover:scale-105 transition duration-500 ease-in-out " /> </div>
                <div className="w-full h-30 lg:h-25 bg-amber flex flex-row items-end justify-around lg:justify-normal px-2 py-2">
                  <div className="border-l-5 border-[#ec711e] h-20 bg-amber justify-around lg:w-150 xl:w-150 px-2 flex flex-col">
                    <p className="text-white text-xl font-bold">WaterBottles Brand</p>
                    <h1 className="font-bold text-[15px]">Retouching . Manipulation . Enhencment</h1>
                  </div>
                    <Link to="/Service" className="w-10 h-10 group-hover:animate-bounce rounded-full relative bottom-5 border border-[#ec711e] text-2xl cursor-pointer flex itmes-center justify-center">&#8594;</Link>
                </div>
              </div>

              <div className=" border bg-[#0f1011] group border-zinc-800 flex flex-col h-100 w-full">
                <div className="w-full h-85 overflow-hidden"> <img src={cup} className="w-full h-75 object-cover group-hover:scale-105 transition duration-300 ease-in-out" /> </div>
                <div className="w-full h-30 lg:h-25 bg-amber flex flex-row items-end justify-  px-2 py-2">
                  <div className="border-l-5 border-[#ec711e] h-20 bg-amber justify-around w-75 lg:w-150 xl:w-150  px-2 flex flex-col">
                    <p className="text-white text-xl font-bold"> Designing</p>
                    <h1 className="font-bold text-[15px]">stunishing . Retouch . Digital</h1>
                  </div>
                    <Link to="/Service" className="w-10 h-10 rounded-full group-hover:animate-bounce relative bottom-5 border border-[#ec711e] text-2xl cursor-pointer flex itmes-center justify-center">&#8594;</Link>
                </div>
              </div>

              <div className=" border bg-[#0f1011] group border-zinc-800 flex flex-col h-100 w-full">
                <div className="w-full h-85 overflow-hidden"> <img src={branding} className="w-full h-75 object-cover group-hover:scale-105 transition duration-300 ease-in-out" /> </div>
                <div className="w-full h-30 lg:h-25 bg-amber flex flex-row items-end justify-  px-2 py-2">
                  <div className="border-l-5 border-[#ec711e] h-20 bg-amber justify-around w-75 lg:w-150 xl:w-150  px-2 flex flex-col">
                    <p className="text-white text-xl font-bold">Branding</p>
                    <h1 className="font-bold text-[15px]">Mugs. Pens . WaterBottles . Office Materials</h1>
                  </div>
                    <Link to="/Service" className="w-10 h-10 rounded-full group-hover:animate-bounce relative bottom-5 border border-[#ec711e] text-2xl cursor-pointer flex itmes-center justify-center">&#8594;</Link>
                </div>
              </div>

              <div className=" border bg-[#0f1011] group border-zinc-800 flex flex-col h-100 w-full">
                <div className="w-full h-85 overflow-hidden"> <img src={printing} className="w-full h-75 object-cover group-hover:scale-105 transition duration-300 ease-in-out" /> </div>
                <div className="w-full h-30 lg:h-25 bg-amber flex flex-row items-end justify-  px-2 py-2">
                  <div className="border-l-5 border-[#ec711e] h-20 bg-amber justify-around w-75 lg:w-150 xl:w-150 px-2 flex flex-col">
                    <p className="text-white text-xl font-bold">Printing</p>
                    <h1 className="font-bold text-[15px]">InviceBooks . T-Shirt . PaperCrafted . Benners</h1>
                  </div>
                    <Link to="/Service" className="w-10 h-10 rounded-full group-hover:animate-bounce relative bottom-5 border border-[#ec711e] text-2xl cursor-pointer flex itmes-center justify-center">&#8594;</Link>
                </div>
              </div>

              
              {/* card */}
            </div>
          </div>
          {/* why section continue */}
          <div className="w-full h-200 border-b border-zinc-800 px-3 flex flex-col gap-4 mt-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2
          lg:flex lg:flex-row lg:gap-2 lg:h-60 lg:mt-0 lg:items-center lg:justify-center min-[100px]:w-100 min-[400px]:w-full
          ">
            <div className="h-50 bg-amber flex flex-col items-center justify-evenly lg:border-none sm:border-b-2 rounded-4xl sm:border-zinc-800">
               <motion.p 
                initial={{x: -100}}
              whileInView={{x: 0}}
              transition={{
                duration: 2,
                type: "spring"
              }}
               className="text-md font-bold text-[#ec711e]">WHY CHOOSE GIANT?</motion.p>
               <motion.h1 

                initial={{x: -100}}
                whileInView={{x: 0}}
                transition={{
                duration: 1.5,
                type: "spring"
              }}
               
               className="text-white text-5xl text-center font-semibold  w-100">WHY CHOOSE  </motion.h1>
                <motion.span 
                 initial={{x: -100}}
                whileInView={{x: 0}}
                transition={{
                duration: 1,
                type: "spring"
              }}
                className="bg-linear-to-r from-indigo-500 via-[#f35c14] to-[#ec701ea6] bg-clip-text text-transparent text-5xl">GIANT.</motion.span>
               
            </div>
            
              <div className="h-50 flex flex-col border-r-2 border-zinc-800 sm:border-r sm:border-zinc-800 lg:py-5 lg:h-30 lg:items-center lg:justify-center  ">
                 <div className="w-full h-40  flex items-start justify-start px-10 py-2"><p className="text-5xl"><img src={bolt} className="w-10" /></p></div>
                 <div className="w-full h-full  flex flex-col items-start justify-start px-10 py-2">
                   <p className="text-white text-xl font-bold">Creative Excellence</p>
                   <h1 className="text-gray-100 font-bold text-sm ">We turn ideas into high-impact visual that get result.</h1>
                  </div>

              </div>

              <div className="h-50 flex flex-col border-r-2 border-zinc-800 sm:border-r sm:border-zinc-800 lg:py-5 lg:h-30 lg:items-center lg:justify-center">
                 <div className="w-full h-40  flex items-start justify-start px-10 py-2"><p className="text-5xl"><img src={group} className="w-10" /></p></div>
                 <div className="w-full h-full  flex flex-col items-start justify-start px-10 py-2">
                   <p className="text-white text-xl font-bold">Experienced Team</p>
                   <h1 className="text-gray-100 font-bold text-sm"> skilled disigner and editors with a position for creativity.</h1>
                  </div>

              </div>

              
              <div className="h-50 flex flex-col border-r-2 border-zinc-800 sm:border-r sm:border-zinc-800 lg:border-none lg:py-5 lg:h-30 lg:items-center lg:justify-center">
                 <div className="w-full h-40  flex items-start justify-start px-10 py-2"><p className="text-5xl"><img src={clock} className="w-10" /></p></div>
                 <div className="w-full h-full  flex flex-col items-start justify-start px-10 py-2">
                   <p className="text-white text-xl font-bold">On-time Derivery</p>
                   <h1 className="text-gray-100 font-bold text-sm"> We respect your time and deliver with precision.</h1>
                  </div>

              </div>

               

          </div>
          {/* why section end */}
          {/* last section start */}
          <div className="w-full h-80 flex flex-col items-center justify-evenly px-3 border-b-2 border-zinc-800 lg:border-none
          min-[100px]:w-100 min-[400px]:w-full
          "> 
          <div className="w-full h-80 object-cover -z-10 absolute opacity-50  flex items-center justify-center">
            <img src={logo1} className=" object-cover absolute opacity-200  sm:w-80 s m:h-80 lg:w-100" />

          </div>
              <p className="text-lg font-bold text-[#ec711e]">LET'S CREATE TOGETHER</p>
              <h1 className="text-white text-5xl font-bold text-center">Ready To Start Your Project?</h1>
              <h1 className="text-gray-100 text-2sm font-bold text-center  sm:w-90 min-[20px]:hidden">Bring Your ideas to life with a team that cares about your vision  Let's create something amazing together</h1>
                <button type="button" onClick={TalkOpen} className=" sm:bg-amber  cursor-pointer sm:w-50 w-50 text-white text-xl font-semibold h-12 rounded-md  border-2 border-[#ec711e] ">LET'S TALK  &#8594;</button>

          </div>
          {/* last section end */}
          {/* footer start */}
          <div className="w-full h-300 flex flex-col  border-stone-900 border-t  gap-5 px-3 items-center justify-evenly sm:grid sm:grid-cols-2 sm:h-170 sm:gap-5 md:grid md:grid-cols-2 md:h-170 md:gap-5
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
                <Link to="/Pertner" className="text-white cursor-pointer font-semibold">Our Pertner</Link>
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
};

export default Main;
