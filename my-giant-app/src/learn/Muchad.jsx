import React from 'react'
import {motion} from 'framer-motion'

const Muchad = () => {
  return (
    <div className="text-white">
      <motion.div
      initial={{x: 500, opacity: 0.3}}
      animate={{x: 0,opacity: 100,  }}
      
      transition={{duration: 0.3, type: 'tween', }}
      >
   <h1>hello motion</h1>
      </motion.div>
    </div>
  )
}

export default Muchad