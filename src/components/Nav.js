import React, { useEffect, useState } from 'react'
import './css/Nav.css'

function Nav() {

  const[show ,handleShow] = useState(false)

  const transitionNavbar=()=>{
    if(window.scrollY>100){
    handleShow(true)
    }
    else{
      handleShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",  transitionNavbar)

    return()=>{
      window.removeEventListener("scroll", transitionNavbar)
    }
  },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_content'>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' alt=' '/>
            
        </div>
      
    </div>
  )
}

export default Nav;
