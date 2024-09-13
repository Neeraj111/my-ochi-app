import { motion } from 'framer-motion'
import React from 'react'


function Marque() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed= ".1"className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className=" flex h-full whitespace-nowrap text border-t-2 border-b-2 overflow-hidden border-zinc-300">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}} className='text-[20vw] leading-none font-semibold uppercase -mt-4 px-4 pt-5'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10}} className='text-[20vw] leading-none font-semibold uppercase -mt-4 px-4 pt-5 '>We are ochi</motion.h1>
        </div>
        </div>
  )
}

export default Marque