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
              <a href="https://www.instagram.com/ecficio.vnrvjiet/?hl=en" style={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"row"}}>
              <FaInstagramSquare  style={{fontSize:"20px",marginRight:"1vw"}}/>
              <span>Ecficio_Instagram</span>
              </a>
            </div>
            <div style={{ display: "flex", gap: "30px",padding:"0.3rem 0.7rem" }}>
              <a href="https://twitter.com/EcficioVNRVJIET"  style={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"row"}}>
              <BsTwitterX style={{fontSize:"20px",marginRight:"1vw"}}/>
              <span>Ecficio_X</span>
              </a>
            </div>
            <div style={{ display: "flex", gap: "30px" ,padding:"0.3rem 0.7rem"}}>
              <a href="https://www.facebook.com/ecficio.vnrvjiet/"  style={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"row"}}>
              <FaFacebookF style={{fontSize:"20px",marginRight:'1vw'}} />
              <span>Ecficio_Facebook</span>
              </a>
            </div>
            <div style={{ display: "flex", gap: "30px",padding:"0.3rem 0.7rem" }}>
              <a href="https://www.linkedin.com/in/ecficiovnrvjiet/?originalSubdomain=in" style={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"row"}}>
              <FaLinkedin style={{fontSize:"20px",marginRight:"1vw"}} />
              <span>Ecficio_linkedIn</span>
              </a>
            </div>
            
          </li>
          <li className='location'>
            <h4>Contact Us On</h4>
            <div style={{ display: "flex", gap: "30px",padding:"0.3em 0.7em",paddingTop:"1em" }}>
              <BiPhoneCall style={{fontSize:"20px"}} />
              <span>Rohan Poluri(+91-62813 86790)</span>
            </div>
            <div style={{ display: "flex", gap: "30px",padding:"0.3em 0.7em",paddingBottom:"1.5em" }}>
              <BiPhoneCall style={{fontSize:"20px"}} />
              <span>Anup Srivastav (+91-70931 74138)</span>
            </div>
            

           
          </li>
          <li>
             <h4 style={{paddingBottom:"0.5em"}}>FOR ANY QUERIES</h4>
             <div style={{display:"flex",flexDirection:"column"}}>
              <a href="mailto:ecficio@vnrvjiet.in">
            <span style={{padding:"0.3em 0.7em"}}>ecficio@vnrvjiet.in</span>
            </a>
           </div>
          </li>
        </ul>
            <span style={{padding:"0.3em 0.7em",position:"absolute",bottom:"2em",right:"4em"}}>&copy;2k23 ecficio@vnrvjiet</span>
      </div>
    </footer>
  )
}

export default Footer1