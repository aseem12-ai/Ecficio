import React from 'react'
import Navbar from './Navbar'
import Footer1 from './Footer1/Footer1'
import logo from './img/register.jpg'

const Register = () => {
  return (
    <div style={{background:"lightskyblue"}}>
      <Navbar/>
      <div style={{padding:"4rem"}}>
     <img src={logo} alt="" style={{borderRadius:"30px"}} /></div>



     <div className='content'>
    
  <form action="/" className='reg-container'>
  <a href='https://axisbpayments.razorpay.com/techfest-vnrvjiet' class="vnr" >
        <span class="btn__circle" ></span>
        <span class="btn__white-circle" style={{background:"	#ADD8E6"}}>
          <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12" >
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
        </span>
        <span class="btn__text" style={{color:"black",background:"#df3afb", border:"1px solid black",borderRadius:"30em",fontWeight:"4em"}}>Students of VJ Institutions</span>
      </a>
</form>



 <form action="https://axisbpayments.razorpay.com/techfest-vnrvjiet" className='reg-container' style={{marginBottom:"6em"}}>
  <a href="https://axisbpayments.razorpay.com/pl_N5pJ9ATC8nTdkh/view" class="vnr">
        <span class="btn__circle"></span>
        <span class="btn__white-circle" style={{background:"#ADD8E6"}}>
          <svg xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 21 12">
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
        </span>
        <span class="btn__text" style={{color:"black",background:"#df3afb", border:"1px solid black",borderRadius:"30em"}}>Non-VJ Participants (Others)</span>
      </a>
</form>

</div>

      <Footer1/>
    </div>
  )
}

export default Register