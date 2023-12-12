import React from 'react'
import "./style.css"
import { BiPhoneCall } from "react-icons/bi"
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer1() {
  return (
    <footer className='footer1'>
      <div className="container">
        <ul className='footer'>
          
          
          <li>
            <h4 >Keep connected</h4>
            <div style={{ display: "flex", gap: "30px",padding:"0.3rem 0.7rem",paddingTop:"1rem" }}>
              
              <FaInstagramSquare  style={{fontSize:"20px"}}/>
              <span>Instagram</span>
            </div>
            <div style={{ display: "flex", gap: "30px",padding:"0.3rem 0.7rem" }}>
              <BsTwitterX style={{fontSize:"20px"}}/>
              <span>X</span>
            </div>
            <div style={{ display: "flex", gap: "30px" ,padding:"0.3rem 0.7rem"}}>
              <FaFacebookF style={{fontSize:"20px"}} />
              <span>Facebook</span>
            </div>
            <div style={{ display: "flex", gap: "30px",padding:"0.3rem 0.7rem" }}>
              <FaLinkedin style={{fontSize:"20px"}} />
              <span>Linkedin</span>
            </div>
            
          </li>
          <li className='location'>
            <h4>Contact Us On</h4>
            <div style={{ display: "flex", gap: "30px",padding:"0.3em 0.7em",paddingTop:"1em" }}>
              <BiPhoneCall style={{fontSize:"20px"}} />
              <span>phone number 1</span>
            </div>
            <div style={{ display: "flex", gap: "30px",padding:"0.3em 0.7em",paddingBottom:"1.5em" }}>
              <BiPhoneCall style={{fontSize:"20px"}} />
              <span>Phone number 2</span>
            </div>
            

           
          </li>
          <li>
             <h4 style={{paddingBottom:"0.5em"}}>FOR ANY QUERIES</h4>
             <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{padding:"0.3em 0.7em"}}>ecficio@vnrvjiet.in</span>
           </div>
          </li>
        </ul>
            <span style={{padding:"0.3em 0.7em",position:"absolute",bottom:"2em",right:"4em"}}>&copy;2k23 ecficio@vnrvjiet</span>
      </div>
    </footer>
  )
}

export default Footer1