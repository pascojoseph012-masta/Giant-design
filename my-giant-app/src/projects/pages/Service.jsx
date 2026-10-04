import React from 'react'
import {Link} from "react-router-dom"
import service from "../../assets/service.png"
import robot from "../../assets/robot.png"
import photo from "../../assets/photo.jpg"
import cat from "../../assets/cat.jpg"
import photo1 from "../../assets/photo1.jpg"
import photo3 from "../../assets/photo3.jpg"
import print from "../../assets/print.jpg"
import branding from "../../assets/branding.jpg"
import design1 from "../../assets/design1.jpg"
import envitation from "../../assets/envitation.jpg"
import card1 from "../../assets/card1.jpg"
import phone from "../../assets/phone.svg"
import location from "../../assets/location.svg"
import email from "../../assets/email.svg"
import facebook from "../../assets/facebook.jpg"
import google from "../../assets/google.jpg"
import instgram from "../../assets/instgram.jpg"
import netflix from "../../assets/netflix.jpg"
import whatup from "../../assets/what'sup.jpg"
import tewtter from "../../assets/tewtter.jpg"
import designi from "../../assets/designi.jpg"
import sbranding from "../../assets/sbranding.jpeg" 
import flatdesigning from "../../assets/flatdesigning.jpeg"
import printing from "../../assets/printing.jpeg"




const Service = () => {
  return (
    <div>
      {/* main service */}
      <div className="w-full h-  bg-[#000000f8] relative top-15 text-white bg-amber min-[100px]:w-100 min-[400px]:w-full">
        <div className="w-full flex flex-col px-3 items-center justify-around bg-slate h-250  sm:flex sm:place-items-start  sm:justify-start  sm:h-140 
        2xl:px-15 lg:px-15 xl:px-15 2xl: min-[100px]:w-100 min-[400px]:w-full
        "> 
        {/* lading service section */}
        
       <div className="w-full h-220 border-b-2  shadow-lg  flex flex-col-reverse items-center justify-center rounded-3xl  mt-10  border-zinc-800 
       sm:w-full sm:h-120 sm:shadow-lg sm:flex sm:bg-amber sm:flex-row sm:items-center sm:justify-center sm:rounded-3xl sm:border-2 sm:border-zinc-800
        sm:mt-10
       md:w-full md:h-120 md:shadow-lg md:flex md:bg-amber md:flex-row md:items-center md:justify-center md:rounded-3xl md:border-2 md:border-zinc-800

       ">

        <div className="w-full h-full flex flex-col items-center justify-evenly gap-2  rounded-t-3xl sm:flex sm:items-start sm:justify-center lg:px-10">
          <p className="text-4xl font-medium px-3 text-center sm:text-left sm:text-5xl">Our Comprehensive</p>
          <p className="text-5xl font-medium px-3 text-center sm:text-left text-[#ec711e]">Visual Solution</p>
          <h1 className="text-zinc-300 px-3 text-md py-3 sm:text-left lg:text-xl">GIANTS is Creative agency we are the one in the one who can help you to build your bussiness into visual dreams
              that speaks volume we make brands . designing . photo editing . printing .bussiness cards .wedding envitaion 
              and advertisement in the country the movement and growth of bussiness up to market to make fund are determined 
              by us dont hold still came and see your self. 
</h1>
        </div>
        <div className="w-full h-full flex items-center justify-around  rounded-b-3xl  sm:w-130 md:w-130 px-3 lg:w-full"><img src={robot} className="w-full h-full object-cover sm:w-80 sm:h-80 lg:w-100 lg:h-100" /></div>
       </div>
        </div>
        {/* landing service section end */}
        {/* our service section */}
        <div className="w-full h-50 flex flex-col items-center justify-evenly px-3 min-[100px]:w-100 min-[400px]:w-full">
          <p className="font-medium text-white text-5xl text-center">Our Services</p>
          <h1 className="text-zinc-300 text-center text-2sm sm:w-150 md:150">We provide end-to-end servises and creative solutions that help your brand communicate, connect, and convert powered by high expertise
            in designing and graphic design
          </h1>
        </div>
        {/* our service section cards */}
        <div className="w-full h-auto min-[100px]:w-100 min-[400px]:w-full flex flex-col items-center justify-start px-1 bg-amber rounded-t-xl  gap-5 col-gap-0 lg:bg-amber
        2xl:bg-amber
        lg:px-10 xl:px-20 2xl:px-15
        sm:w-full sm:grid sm:grid-cols-2 sm:h-auto sm:items-center sm:justify-evenly
        md:w-full md:grid md:grid-cols-2 md:h-auto md:items-center md:justify-evenly
        xl:w-full xl:grid xl:grid-cols-2 xl:h-auto xl:items-center xl:justify-evenly
        2xl:w-full 2xl:grid 2xl:grid-cols-2 2xl:h-auto 2xl:items-center 2xl:justify-evenly

        ">
          {/* service card */}
          <div className="w-full h-210 rounded-xl flex flex-col items-center justify-start border border-zinc-700 shadow shadow-[#ec711e] bg-[#161618]">
            <div className="w-full h-80 lg:h-100 bg-amber-"><img src={photo} className="object-cover w-full h-full rounded-t-xl" /></div>
            <div className="flex flex-col items-center justify-evenly h-140  w-full gap-5 ">
              <p className="text-5xl text-white font-medium">Photo Editing</p>
               <h1 className="text-center text-lg font-semibold sm:px-4">professional photo retouching manipulation and enhencement service with reqiured expertise making the target expectation came alive</h1> 
            </div>
            <div className="flex flex-col items-start justify-around w-full h-full px-2">
              <div className="flex flex-row items-start mt-5 justify-center w-full h-full">
                <div className="flex flex-col items-center justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouching</li>
                    <li className="text-lg text-white list-disc "> Munipulation</li>
                    <li className="text-lg text-white list-disc ">Color.Grading</li>
                    <li className="text-lg text-white list-disc ">Stunning.Vsual</li>
                  </ul>
                </div>
                <div className="flex flex-col items-end justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Background.Removal</li>
                    <li className="text-lg text-white list-disc ">Image.Restoration</li>
                    <li className="text-lg text-white list-disc ">Enhancement</li>
                    <li className="text-lg text-white list-disc ">Lighting.Correction</li>
                  </ul>
                </div>
                  
              </div>

            </div>
            <button type="button" className="w-70 h-70 min-[320px]:h-60 min-[320px]:w-60  flex items-center justify-center mb-4 hover:shadow-[#ec711e] hover:shadow-lx  rounded-full text-white text-2xl font-semibold cursor-pointer border border-[#ec711e] hover:backdrop-blur-3xl ">LET'S TALK <span className="relative left-5 text-4xl flex items-center justify-center">&#8594;</span> </button>
          </div>

           <div className="w-full h-210 rounded-xl flex flex-col items-center justify-start border border-zinc-700 shadow shadow-[#ec711e] bg-[#161618]">
            <div className="w-full h-80 lg:h-100 bg-amber-"><img src={flatdesigning} className="object-cover w-full h-full rounded-t-xl" /></div>
            <div className="flex flex-col items-center justify-evenly h-140  w-full gap-5 ">
              <p className="text-5xl text-white font-medium">Designing</p>
               <h1 className="text-center text-lg font-semibold sm:px-4">professional photo retouching manipulation and enhencement service with reqiured expertise making the target expectation came alive</h1> 
            </div>
            <div className="flex flex-col items-start justify-around w-full h-full px-2">
              <div className="flex flex-row items-start mt-5 justify-center w-full h-full">
                <div className="flex flex-col items-center justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouch</li>
                    <li className="text-lg text-white list-disc ">Digital</li>
                    <li className="text-lg text-white list-disc ">Enhencement</li>
                    <li className="text-lg text-white list-disc ">stunishing</li>
                  </ul>
                </div>
                <div className="flex flex-col items-end justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouch</li>
                    <li className="text-lg text-white list-disc ">Manipulation</li>
                    <li className="text-lg text-white list-disc ">Enhencement</li>
                    <li className="text-lg text-white list-disc ">stunishing</li>
                  </ul>
                </div>
                  
              </div>

            </div>
            <button type="button" className="w-70 h-70 min-[320px]:h-60 min-[320px]:w-60 flex items-center justify-center mb-5 hover:shadow-[#ec711e] hover:shadow-lx  rounded-full text-white text-2xl font-semibold cursor-pointer border border-[#ec711e] hover:backdrop-blur-3xl ">LET'S TALK <span className="relative left-5 text-4xl flex items-center justify-center">&#8594;</span> </button>
          </div>

           <div className="w-full h-210 rounded-xl flex flex-col items-center justify-start border border-zinc-700 shadow shadow-[#ec711e] bg-[#161618]">
            <div className="w-full h-80 lg:h-100 bg-amber-"><img src={printing} className="object-cover w-full h-full rounded-t-xl" /></div>
            <div className="flex flex-col items-center justify-evenly h-140  w-full gap-5 ">
              <p className="text-5xl text-white font-medium">Printing</p>
               <h1 className="text-center text-lg font-semibold sm:px-4">Premium print finishes including foil stamping, embossing, and luxury cardstocks No pixelation, no mistakes. Just crisp, high-resolution prints every time.</h1> 
            </div>
            <div className="flex flex-col items-start justify-around w-full h-full px-2">
              <div className="flex flex-row items-start mt-5 justify-center w-full h-full">
                <div className="flex flex-col items-center justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Bespoke Layouts</li>
                    <li className="text-lg text-white list-disc ">Custom Typography</li>
                    <li className="text-lg text-white list-disc ">Color Palette</li>
                    <li className="text-lg text-white list-disc ">Them Integration</li>
                  </ul>
                </div>
                <div className="flex flex-col items-end justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Luxury Finishes</li>
                    <li className="text-lg text-white list-disc ">Paper Stock Selection</li>
                    <li className="text-lg text-white list-disc ">Digital RSVP Kits</li>
                    <li className="text-lg text-white list-disc ">Print-Ready Files</li>
                  </ul>
                </div>
                  
              </div>

            </div>
            <button type="button" className="w-70 h-70 min-[320px]:h-60 min-[320px]:w-60 flex items-center justify-center mb-5 hover:shadow-[#ec711e] hover:shadow-lx  rounded-full text-white text-2xl font-semibold cursor-pointer border border-[#ec711e] hover:backdrop-blur-3xl ">LET'S TALK <span className="relative left-5 text-4xl flex items-center justify-center">&#8594;</span> </button>
          </div>

           <div className="w-full h-210 rounded-xl flex flex-col items-center justify-start border border-zinc-700 shadow shadow-[#ec711e] bg-[#161618]">
            <div className="w-full h-80 lg:h-100 bg-amber-"><img src={sbranding} className="object-cover w-full h-full rounded-t-xl" /></div>
            <div className="flex flex-col items-center justify-evenly h-140  w-full gap-5 ">
              <p className="text-5xl text-white font-medium">Branding</p>
               <h1 className="text-center text-lg font-semibold sm:px-4">professional photo retouching manipulation and enhencement service with reqiured expertise making the target expectation came alive</h1> 
            </div>
            <div className="flex flex-col items-start justify-around w-full h-full px-2">
              <div className="flex flex-row items-start mt-5 justify-center w-full h-full">
                <div className="flex flex-col items-center justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Custom Logo Design</li>
                    <li className="text-lg text-white list-disc ">Brand Strategy</li>
                    <li className="text-lg text-white list-disc ">Typograph Styling</li>
                    <li className="text-lg text-white list-disc ">Color Psychology</li>
                  </ul>
                </div>
                <div className="flex flex-col items-end justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Brand Guideline</li>
                    <li className="text-lg text-white list-disc ">visual Assets</li>
                    <li className="text-lg text-white list-disc ">Callateral Systems</li>
                    <li className="text-lg text-white list-disc ">Rebranding Services</li>
                  </ul>
                </div>
                  
              </div>

            </div>
            <button type="button" className="w-70 h-70 min-[320px]:h-60 min-[320px]:w-60 flex items-center justify-center mb-5 hover:shadow-[#ec711e] hover:shadow-lx  rounded-full text-white text-2xl font-semibold cursor-pointer border border-[#ec711e] hover:backdrop-blur-3xl ">LET'S TALK <span className="relative left-5 text-4xl flex items-center justify-center">&#8594;</span> </button>
          </div>

          <div className="w-full h-210 rounded-xl flex flex-col items-center justify-start border border-zinc-700 shadow shadow-[#ec711e] bg-[#161618]">
            <div className="w-full h-80 lg:h-100 bg-amber-"><img src={envitation} className="object-cover w-full h-full rounded-t-xl" /></div>
            <div className="flex flex-col items-center justify-evenly h-140  w-full gap-5 ">
              <p className="text-5xl text-white font-medium">Invitation</p>
               <h1 className="text-center text-lg font-semibold sm:px-4"> Set the tone for your big day with custom-tailored event stationery Modern, elegant, and unforgettable layouts for weddings, galas, and milestones. </h1> 
            </div>
            <div className="flex flex-col items-start justify-around w-full h-full px-2">
              <div className="flex flex-row items-start mt-5 justify-center w-full h-full">
                <div className="flex flex-col items-center justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouch</li>
                    <li className="text-lg text-white list-disc ">Manipulation</li>
                    <li className="text-lg text-white list-disc ">Enhencement</li>
                    <li className="text-lg text-white list-disc ">stunishing</li>
                  </ul>
                </div>
                <div className="flex flex-col items-end justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouch</li>
                    <li className="text-lg text-white list-disc ">Manipulation</li>
                    <li className="text-lg text-white list-disc ">Enhencement</li>
                    <li className="text-lg text-white list-disc ">stunishing</li>
                  </ul>
                </div>
                  
              </div>

            </div>
            <button type="button" className="w-70 h-70 min-[320px]:h-60 min-[320px]:w-60 flex items-center justify-center mb-5 hover:shadow-[#ec711e] hover:shadow-lx  rounded-full text-white text-2xl font-semibold cursor-pointer border border-[#ec711e] hover:backdrop-blur-3xl ">LET'S TALK <span className="relative left-5 text-4xl flex items-center justify-center">&#8594;</span> </button>
          </div>

          <div className="w-full h-210 rounded-xl flex flex-col items-center justify-start border border-zinc-700 shadow shadow-[#ec711e] bg-[#161618]">
            <div className="w-full h-80 lg:h-100 bg-amber-"><img src={card1} className="object-cover w-full h-full rounded-t-xl" /></div>
            <div className="flex flex-col items-center justify-evenly h-140  w-full gap-5 ">
              <p className="text-5xl text-white font-medium text-center min-[320px]:text-4xl min-[360px]:text-5xl ">Bussiness Card</p>
               <h1 className="text-center text-lg font-semibold sm:px-4">Pocket-sized branding that speaks volumes before you even say a word Stand out in a stack with bold, strategic business card layouts.</h1> 
            </div>
            <div className="flex flex-col items-start justify-around w-full h-full px-2">
              <div className="flex flex-row items-start mt-5 justify-center w-full h-full">
                <div className="flex flex-col items-center justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouch</li>
                    <li className="text-lg text-white list-disc ">Manipulation</li>
                    <li className="text-lg text-white list-disc ">Enhencement</li>
                    <li className="text-lg text-white list-disc ">stunishing</li>
                  </ul>
                </div>
                <div className="flex flex-col items-end justify-start w-full h-full px-4">
                  <ul className="flex gap-5 flex-col">
                    <li className="text-lg text-white list-disc ">Retouch</li>
                    <li className="text-lg text-white list-disc ">Manipulation</li>
                    <li className="text-lg text-white list-disc ">Enhencement</li>
                    <li className="text-lg text-white list-disc ">stunishing</li>
                  </ul>
                </div>
                  
              </div>

            </div>
            <button type="button" className="w-70 h-70 min-[320px]:h-60 min-[320px]:w-60  flex items-center justify-center mb-5 hover:shadow-[#ec711e] hover:shadow-lx  rounded-full text-white text-2xl font-semibold cursor-pointer border border-[#ec711e] hover:backdrop-blur-3xl ">LET'S TALK <span className="relative left-5 text-4xl flex items-center justify-center">&#8594;</span> </button>
          </div>
 
          {/* service card end*/}
        </div>
         {/* footer start */}
          <div className="w-full h-300 flex flex-col mt-5 border-t border-zinc-800  gap-5 px-3 items-center justify-evenly sm:grid sm:grid-cols-2 sm:h-170 sm:gap-5 md:grid md:grid-cols-2 md:h-170 md:gap-5
            lg:flex lg:flex-row lg:h-70 min-[100px]:w-100 min-[400px]:w-full
           ">
            {/*footer cards start  */}
            <div className="w-full h-60 flex flex-col justify-evenly px-3 border-l border-zinc-800 lg:border-none">
              <p className="bg-linear-to-r from-indigo-500 text-5xl  via-[#f35c14] to-[#ec701ea6] bg-clip-text text-transparent">GAINTS.</p>
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
              <div className="flex flex-col mt-2 gap-2">
                
                <Link to="/" className="text-white cursor-pointer font-semibold">Home</Link>
                <Link to="/Service" className="text-white cursor-pointer font-semibold">Services</Link>
                <Link to="#" className="text-white cursor-pointer font-semibold">Our Work</Link>
                <Link to="#" className="text-white cursor-pointer font-semibold">About us</Link>
                <Link to="#" className="text-white cursor-pointer font-semibold">Contact Us</Link>
              </div>

            </div>

              <div className=" w-full h-60 flex flex-col gap-5  px-3 border-l border-zinc-800 lg:border-none">
              <p className="text-white font-semibold text-xl">Services</p>
              <div className="flex flex-col mt-2 gap-2">
                <p>Photo Editing</p>
                <p>Graphic Design</p>
                <p>Branding</p>
                <p>Design</p>
                <p>Printing</p>
              </div>

            </div>

            <div className=" w-full h-60 flex flex-col gap-5  px-3 border-l border-zinc-800 lg:border-none ">
              <p className="text-white font-semibold text-xl">Get in Touch</p>
              <div className="flex flex-col mt-2 gap-2">
                <div className="w-full h-14 flex flex-row gap-5 items-center "><img src={location} className="w-8" /> <p className="w-60">kigali . nyarugenge . rubangura plaza . Giants Studio</p> </div>
                <div className="w-full h-14 flex flex-row gap-5 items-center "><img src={email} className="w-8" /> <p className="w-60">Giants@gmail.com</p> </div>
                <div className="w-full h-14 flex flex-row gap-5 items-center "><img src={phone} className="w-8" /> <p className="w-60">+250 788800555</p> </div>
              </div>

            </div>

            
            {/*footer cards end  */}

          </div>
          {/* footer end */}
          <div className="px-3">
          <div className="w-full h-60 flex flex-col justify-around items-center border-t border-zinc-800 px-3 sm:flex sm:flex-row sm:gap-20 sm:h-35 md:h-30
          lg:h-20 lg:gap-170 min-[100px]:w-100 min-[400px]:w-full
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

export default Service