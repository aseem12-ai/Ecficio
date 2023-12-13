import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {links} from './data'
import logo1 from './Events_logo/logo1.png'

const Navbar = () => {

const [showLinks,setShowLinks]=useState(false)

const toggleLinks=()=>{
  setShowLinks(!showLinks)
}



  return (
    <nav >
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
          <img src={logo1} alt=""  className='logo'/>
          </a>
          {/* <h2 style={{padding:"0px"}}>ECFICIO 6.0 H</h2> */}
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars/>
          </button>
        </div>
       
          <div className={showLinks ?'links-container show-container':'links-container'}>
          <ul className="links">
            {links.map((link)=>{
              const {id,url,text}=link
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        {/* social links */}
        
        
      </div>
      
      
      
     
      
      
      </nav>



  )
}

export default Navbar


