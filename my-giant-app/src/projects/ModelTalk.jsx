import React from 'react'
import close from '../assets/close2.svg'
import phone2 from '../assets/phone2.svg'


const ModelTalk = ({TalkClose}) => {
  return (
    <div className="text-white">
        <div  className="w-full h-250 sm:h-300 fixed z-100 top-0 backdrop-blur-xl flex flex-col items-center px-3 
        sm:px-30 md:px-30 lg:px-110 xl:px-110 
        ">
            <div className="w-full h-140 rounded-2xl border-2 border-amber-800 bg-[#0f1011] backdrop-blur-2xl mt-20 sm:mt-50 lg:mt-20
            
            ">
                <div className="w-full h-10 flex items-end justify-end py-1 pl-2">
                    <button type="button" onClick={TalkClose} className="w-8 h-8 cursor-pointer "><img src={close} className="w-5  object-cover" /></button>
                </div>
                <div className="w-full h-119 rounded-b-2xl  px-3 flex flex-col items-start gap-3 ">
                    <p className="text-white text-2xl font-bold">Book a Call</p> 
                    <h1 className="text-zinc-400 font-medium">Get in Touch Call us directly or send us email</h1>
                    <div className="flex flex-col gap-2 justify-center">
                        <p className="text-zinc-400 text-medium text-lg font-mono ">EMAIL</p>
                        <h1 className="text-lg text-[#ec701eea] font-medium">GaintsDesign@gmail.com</h1>
                    </div>
                        <p className="text-zinc-400 text-medium text-lg font-mono relative top-7">PHONE</p>

                    <div className="w-full h-50 flex flex-col gap-5 mt-10 ">
                        <div className="flex flex-row gap-20 items-center justify-around w-full px-2 h-full rounded-2xl border border-zinc-800 hover:border-[#ec701eea]">
                            <div className="flex flex-row gap-3 items-center justify-center ">
                            <div className="w-11 h-10 rounded-full flex items-center justify-center bg-[#ec701e67]"> <img src={phone2} className="object-cover w-6" /></div>
                            <p>+250 788800555</p>              
                            </div>
                            <button type="button" className="w-15 h-6 font-medium bg-[#ec701eea] flex items-center justify-center rounded-xl">Call</button>


                        </div>
                        <div className="flex flex-row items-center justify-around w-full h-full rounded-2xl border border-zinc-800 cursor-ponter hover:border-[#ec701eea]">
                             <div className="flex flex-row gap-20 items-center justify-around w-full px-2 h-full rounded-2xl border border-zinc-800 hover:border-[#ec701eea]">
                            <div className="flex flex-row gap-5 items-center justify-center ">
                            <div className="w-11 h-10 rounded-full flex items-center justify-center bg-[#ec701e67]"> <img src={phone2} className="object-cover w-6" /></div>
                            <p>+250 722705501</p>              
                            </div>
                            <button type="button" className="w-15 h-6 font-medium bg-[#ec701eea] flex items-center justify-center rounded-xl">Call</button>


                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <p className="text-zinc-400 text-bold text-lg font-mono">ADDRESS</p>
                        <h1>Kigali Nyarugenge rubangura plaza</h1>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ModelTalk