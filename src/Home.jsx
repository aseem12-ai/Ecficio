import React from 'react'
import Navbar from './Navbar'
import Footer1 from './Footer1/Footer1'
import Body from './Body'
import img2 from './img/Ellipse 6.svg'
import img3 from './img/Ellipse 7.svg'

const Home = () => {
  return (
    <div className='home'>
    {/* <img style={{position:"absolute",opacity:"0.3",right:"10em",left:"0",marginBottom:"6em"}} src={img2} /> */}
    {/* <img style={{position:"absolute",opacity:"0.3",right:"10em",left:"0"}} src={img3} /> */}
    <Navbar/>
    <Body/>
    <Footer1/>
    </div>
  )
}

export default Home