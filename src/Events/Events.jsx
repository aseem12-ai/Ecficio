import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Events.css';
import Navbar from '../Navbar';
import Footer1 from '../Footer1/Footer1';
import startup from '../Events_logo/Startup Idea Competition.png'
import Big from '../Events_logo/My Big Idea (1).png'
import parishkar from '../Events_logo/Parishkaar (1).png'




function Events() {
  return (

    <div className='main1'>
      <Navbar/>
     
        {/* <h3 className='ecficio'>ECFICIO 6.0H</h3> */}
        <div>
          {/* <img src={Ellipse} className='col-8 col-sm-8 col-md-8  col-lg-8 float-start' /> */}
        </div>
        {/* <div>
          <img src={Line1} className='col-6 col-sm-6 col-md-6  col-lg-6 line1' />
          <img src={Line2} className='col-5 col-sm-5 col-md-5  col-lg-5   line2' />
          <img src={Line3} className='col-4 col-sm-4 col-md-4  col-lg-4   line3' />
          <img src={Arrow} href='/' className='col-1 col-sm-1 col-md-1 col-lg-1   arrow'/>
        </div> */}
        
      <form action="/register">
        <div style={{display:"flex",
      justifyContent:"center",
      alignContent:"center",
      marginTop:"10vw"}} className='box-1'>
        
        <button className='btn btn-one' style={{padding:"2.5vw 5vw"}}>REGISTER NOW</button>
        </div>
        </form>
      <div className='temp text-center '>
        <div style={{fontSize:"2em"}}><b>LEVEL - 1</b></div>
      <div className='box1'>
        <div style={{fontSize:"4VW",paddingBottom:"2vw",fontWeight:"bold"}}>MY BIG IDEA COMPETITION</div>
        <div style={{display:"flex",justifyContent:"space-around",alignContent:"center",paddingBottom:"2vw"}}>
                    <div style={{fontSize:"1.5vw"}}> <span >Date</span>: 14th dec 2023 (D1) 
                   </div>
                    <div style={{fontSize:"1.5vw"}}> <span >Time</span> : 10:00 a.m to 5:00 p.m D1


                    		</div>
                    <div style={{fontSize:"1.5vw"}}> <span >Venue</span> : A-117 & 118</div>
                </div>
          <img src={Big} alt="" />


        <div className='contents ' style={{alignItems:"flex-start"}}>
         <h4 style={{fontSize:"3vw",maxWidth:"100%",textAlign:"start",paddingTop:"3vw"}}>Join us at My Big Idea Hackathon and Submit your innovative pitch. Refine and Enrich your idea in both technical and business aspects by interacting with our esteemed jury!  Don't miss this opportunity to bridge the gap in your startup journey and soar to new heights
</h4>
        </div>
      </div>
      <div>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeDgaT2ZlR2KB5RdUS-YHq-d1P80EkWBXvZy2yGQ8E_8m3dyw/viewform' className='reg-container' >
<button className='reg' style={{background:"#fff"}}>REGISTER NOW</button>
</a>
      </div>



      </div>

      
      <div className='note'>
        NOTE:
        <br></br>
      ONE MUST SUBMIT THEIR IDEA IN MY BIG IDEA COMPETITION 
      TO SHORTLIST FOR BELOW TWO COMPETITIONS
      </div>



  <div className='temp text-center '>
       <div style={{fontSize:"2em"}}><b>LEVEL - 2</b></div>
      <div className='box1'>
        <div style={{fontSize:"4VW",paddingBottom:"2vw",fontWeight:"bold"}}>PARISHKAR</div>
        <div style={{display:"flex",justifyContent:"space-around",alignContent:"center",paddingBottom:"2vw"}}>
                    <div style={{fontSize:"1.5vw"}}> <span >Date</span>: 14th dec 2023 (D1) 
                    <br />15th dec 2023 (D2) 
                    <br />
                    16th dec 2023 (D3) 
                   </div>
                    <div style={{fontSize:"1.5vw"}}> <span >Time</span> : 10:00 a.m to 5:00 p.m D1
                    <br />
10:00 a.m to 5:00 p.m D2
<br />
10:00 a.m to 3:00 p.m D3



                    		</div>
                    <div style={{fontSize:"1.5vw"}}> <span >Venue</span> : C-209 & 210</div>
                </div>
          <img src={parishkar} alt="" />


        <div className='contents ' style={{alignItems:"flex-start"}}>
         <h4 style={{fontSize:"3vw",maxWidth:"100%",textAlign:"start",paddingTop:"3vw"}}>Explore our diverse domains and choose a problem statement that resonates the most with you. With imagination and the right tools, envision a creative solution that can truly make a difference and help in making the world a better place!
</h4>
        </div>
        
      </div>
       <div className='box1'>
          <div style={{fontSize:"4VW",paddingBottom:"2vw",fontWeight:"bold"}}>STARTUP IDEA COMPETITION</div>
        <div style={{display:"flex",justifyContent:"space-around",alignContent:"center",paddingBottom:"2vw"}}>
                    <div style={{fontSize:"1.5vw"}}> <span >Date</span>: 14th dec 2023 (D1) 
                    <br />15th dec 2023 (D2) 
                    <br />
                    16th dec 2023 (D3) 
                   </div>
                    <div style={{fontSize:"1.5vw"}}> <span >Time</span> :		10:00 a.m to 5:00 p.m D2
                    <br />
10:00 a.m to 3:00 p.m D3	

                    



                    		</div>
                    <div style={{fontSize:"1.5vw"}}> <span >Venue</span> : A117 & 118</div>
                </div>
          <img src={startup} alt="" />


        <div className='contents ' style={{alignItems:"flex-start"}}>
         <h4 style={{fontSize:"3vw",maxWidth:"100%",textAlign:"start",paddingTop:"3vw"}}>This is an exciting platform to showcase your innovative start-up ideas! A panel of experts awaits, ready to provide valuable feedback, guidance and incubation!!  Seize this opportunity and turn your intriguing ideas into reality

</h4>
        </div>
        
      </div>
      <div>
        <a href='' className='reg-container'>
<button className='reg'>REGISTER NOW</button>
</a>
      </div>



      </div>

    <Footer1/>
    </div>




  )
}

export default Events