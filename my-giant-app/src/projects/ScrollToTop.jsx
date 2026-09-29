import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  const {pathaname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathaname]);
}

export default ScrollToTop