import React from 'react'
import logo from './img/ecfcio_main_poster.png'


import events from './img/events.png'
import w_pd from './img/w&pd.png'

// import c1 from './carousel/c-1.jpg'
// import c2 from './carousel/c-2.jpg'
// import c3 from './carousel/c-3.jpg'


import Carousel from 'react-bootstrap/Carousel';
import DarkVariantExample from './Craous/Carousel'
// import Carousel from './Craous/Carousel'
// import UncontrolledExample from './UncontrolledExample';
// import svg from './img/Ellipse 6.svg'

const Body = () => {
  return (
  <main  style={{marginBottom:"0",paddingBottom:"0"}}>


    <div style={{padding:"2em",Height:"50em"}}>
<DarkVariantExample/>
</div>

{/* <UncontrolledExample/> */}

{/* <Carousel/> */}

{/* 

<Carousel>
    <Carousel.Item style={{width:"50vw"}}>
      <img className='ca' style={{height:'90vh',marginLeft:"20em"}}
        // classNa2e="d-block"
        src={c1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='ca' style={{height:'90vh',marginLeft:"30em"}}
        // className="d-block "
        src={c2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'90vh',right:"50px",marginLeft:"30em"}}
        // className="d-block " 
        className='ca'
        src={c3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> */}






    <div style={{padding:"4vw "}}>
     <img src={logo} alt="" style={{borderRadius:"1em"}} />
     
     </div>

 <div class="card card1" style={{maxWidth:"100%"}} >
  <div class="card-body" style={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column"}}>
    {/* <img src={svg} alt="" style={{position:"absolute"}} /> */}
    <h5 class="card-title " style={{textAlign:"center",color:"#fff",fontSize:"5vw"}}>ABOUT ECFICIO</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p class="card-text" style={{color:"wheat",fontSize:"3vw"}}>
      The annual entrepreneurship fest of VNRVJIET is now back with another edition to immerse you into the world of startup tech! Equip your innovative ideas with knowledge and exposure. Gain access to engaging workshops, exciting competitions with cashable prizes and get a chance to meet renowned tech enthusiasts. Register Now!

    </p>
   
  </div>
</div>
<form action="/register" className='reg-container'>
<button className='reg'>REGISTER NOW</button>
</form>

<div style={{padding:"2vw"}}>
     <img src={events} alt="" style={{borderRadius:"10px"}} />
     


     <form action="/events" className='reg-container'>
<button class="ex reg ">Explore
  <span class="ir"></span>
  <span class="ira"></span>
</button>
</form>


     </div>



     <div style={{padding:"2vw"}}>
     <img src={events} alt="" style={{borderRadius:"10px"}} />
     


     <form action="/competitions" className='reg-container'>
<button class="ex reg ">Explore
  <span class="ir"></span>
  <span class="ira"></span>
</button>
</form>


     </div>




     
     <div style={{padding:"2vw"}}>
     <img src={w_pd} alt="" style={{borderRadius:"10px"}} />
     


     <form action="/workshops" className='reg-container' style={{marginBottom:"1rem"}}>
<button class="ex reg ">Explore
  <span class="ir"></span>
  <span class="ira"></span>
</button>
</form>


     </div>





    </main>
  )
}

export default Body