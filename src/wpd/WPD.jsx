import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Ellipse from '../assets/Ellipse.svg';
import './WPD.css';
import Line1 from '../assets/Line1.svg';
import Arrow from '../assets/Arrow 1.svg'
// import Comp2 from './Comp2';
import Line2 from '../assets/Line 11.svg';
import Line3 from '../assets/Line 9.svg';
import Ellipse2 from '../assets/Ellipse 13 (2).svg'; 
import Img from '../assets/img_avatar.png';
import Ellipse3 from '../assets/Ellipse 13 (3).svg';
import GDSC from '../assets/GDSC.png';
import A from '../assets/1.jpeg';
import Navbar  from '../Navbar'
import Footer1 from '../Footer1/Footer1'


function WPD() {
  return (
    <div className='main3'>  
     


     <Navbar/>
        {/* <h3 className='ecficio'>ECFICIO 6.0H</h3> */}
        <div>
          {/* <img src={Ellipse} className='col-8 col-sm-8 col-md-8  col-lg-8 float-start' /> */}
        </div>
        <div>
          {/* <img src={Line1} className='col-6 col-sm-6 col-md-6  col-lg-6 line1' />
          <img src={Line2} className='col-5 col-sm-5 col-md-5  col-lg-5  line2' />
          <img src={Line3} className='col-4 col-sm-4 col-md-4  col-lg-4  line3' /> */}
          {/* <img src={Arrow} href='/' className='col-1 col-sm-1 col-md-1 col-lg-1   arrow'/> */}
        </div>
        {/* <form action="/register">
        < div   style={
          {display:"flex",
          justifyContent:"center",
          alignContent:"center"}}>
        <button className='marketing' 
        style={{marginTop:"6em",fontWeight:"bold"}}>REGISTER NOW</button>
        </div>
        </form> */}
        

         <div style={{display:"flex",justifyContent:"center",paddingTop:"4em"}}>
      <div className='market' style={{marginTop:"3em"}}>
        GDSC PANEL DISCUSSION
      </div>
      </div>

        <div   style={{
      margin:"3em"
        }}>
        <img src={GDSC} className='gdscimg' 
        style={{borderRadius:"2em"}}/>
        </div>
        {/* <img src={Ellipse2} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse2 '/> */}
        <div className='pannelcontent' 
        style={
          {textAlign:"center",
          maxWidth:"100%",
          marginLeft:"5vw",
          marginRight:"5vw",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          border:"1px solid black", 
          background:"linear-gradient(180deg, rgba(23, 78, 185, 0.90) 0%, rgba(167, 249, 215, 0.00) 100%)",
          padding:"1.5em",
          borderRadius:"2em"}}>
     Dive into the forefront of innovation with Google Developer Student Clubs Talks. This electrifying platform showcases visionaries, tech maestros, and industry wizards, unraveling the art of coding dreams into reality. Brace for an epic journey where ideas spark , ideas Ignite! Immerse yourself in a dynamic fusion of wisdom and innovation. Our Talks bring visionaries and pioneers to center stage, unraveling the secrets of success in the entrepreneurial cosmos. Brace for a symphony of inspiration that transcends the ordinary because at GDSC Talks, we don't just talk about the future, we shape it!  Join the revolution – GDSC Talks, where innovation finds its voice!

      </div>



        <div class="card dark">
      <div style={
        {display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column",
        alignItems:"center",
        paddingLeft:"1em",margin:"0.01em"}}>
    <img src={A} class="card-img-top" alt="..."/>
   
    </div>
    
      <div class="text-section" 
      style={
        {
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column"}}>
        <h3 style={{color:"#080808",paddingTop:"1em"}}>Mr. Jignesh Talasila <span style={{fontSize:'0.7em'}}>Co-Founder & C.E.O Of PerspectAI</span>.</h3>
        {/* <h1 class="card-title" style={{marginRight:"1.2em",paddingTop:"1em"}}></h1> */}
        <p class="card-text" style={{paddingTop:"1em",wordSpacing:"0.5em",fontSize:"3vw"}}>The Co-Founder & CEO of PerspectAI based in Hyderabad, Mr. Jignesh has steered PerspectAI towards a mission that transcends traditional hiring. His expertise lies in leveraging these tools to unravel an individual's true potential, revolutionizing the landscape by bridging the gap between jobs and job seekers. Jignesh's visionary leadership and commitment to innovation mark a transformative era in the pursuit of unlocking human potential at PerspectAI.
</p>
      </div>
      
    
  </div>
        
        {/* <div className='row profilecard'>
          <div className='col'>
          <img src={A} className='profileimage'/>
          <div className=''>
          Mr. Jignesh Talasila Co-Founder & C.E.O of PerspectAI. 
          </div>
          </div>
          <div className='col profilecardcontent'>
          At PerspectAI, the mission is to leverage psychometrics and new-age technologies to understand an individual's True Potential 
          and bridge the gap between jobs and job seekers.
          </div>
        </div> */}



        
         <div class="card dark">
      <div style={
        {display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column",
        alignItems:"center",
        paddingLeft:"1em",
        margin:"0.01em"}}>
    <img src={Img} class="card-img-top" alt="..."/>
    
    {/* <h5>C.E.O of PerspectAI.</h5> */}
    </div>
     <div class="text-section" 
     style={
      {
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      flexDirection:"column"}}>
        <h3 style={{color:"#080808",paddingTop:"1em",marginTop:"2vw"}}>Mr. Madhu Vadlamani
  <span style={{fontSize:'0.7em'}}>Global Data Center</span>.</h3>
        {/* <h1 class="card-title" style={{marginRight:"1.2em",paddingTop:"1em"}}></h1> */}
        <p class="card-text" style={{paddingTop:"1em",wordSpacing:"0.5em",fontSize:"3vw"}}>Embark on a data-driven journey with Mr. Madhu Vadlamani, a dynamic panelist at GDSC Talks. Hailing from the vibrant city of Hyderabad, Mr Madhu is not just a GDC (Global Data Center) employee; he's the embodiment of an "employee with an entrepreneurial mindset." With a robust skill set encompassing Data Analytics, Artificial Intelligence, Cloud Computing, Content Management, and Business Intelligence. His professional voyage is a testament to his commitment to pushing the boundaries of technology, making him a beacon of inspiration at the intersection of analytics and entrepreneurship.

</p>
      </div>
      
    
  </div>



{/* 
        <div className='row profilecard2'>
          <div className='col'>
          <img src={Img} className='profileimage'/>
          <div className=''>
          Mr. Madhu Vadlamani
 GDC
          </div>
          </div>
          <div className='col profilecardcontent'>
          Employee with an entrepreneurial mindset”, data analyst.(Skills- Data Analytics, Artificial Intelligence (AI) , Cloud Computing , Content Management , Business Intelligence) 

          </div>
        </div> */}





  <div class="card dark">
      <div style={
        {display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column",
        alignItems:"center",
        paddingLeft:"1em",margin:"0.01em"}}>
    <img src={Img} class="card-img-top" alt="..."/>
   
    {/* <h5>C.E.O of PerspectAI.</h5> */}
    </div>
    
       <div class="text-section" 
       style={
        {
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column"}}>
        <h3 style={{color:"#080808",paddingTop:"1em"}}>Mr. Venkata Subramanyam <span style={{fontSize:'0.7em'}}>Co-founder & CEO of Atomstate</span>.</h3>
        {/* <h1 class="card-title" style={{marginRight:"1.2em",paddingTop:"1em"}}></h1> */}
        <p class="card-text" style={{paddingTop:"1em",wordSpacing:"0.5em",fontSize:"3vw"}}>Meet Mr. Venkata Subramanyam, the ingenious Co-founder & CEO of Atomstate, a visionary deep-tech disruptor based in the heart of Hyderabad. Hailing from this city of innovation, Venkata is not just a Business Strategist; he's a revolutionary force in the AIML realm. With an unparalleled knack for transforming customer data, Atomstate pioneers hyper-personalized solutions through its AtomAX and AtomDops platforms. Venkata's expertise is a beacon in tailoring scalable AI models, creating an elegant and impactful customer experience.

</p>
      </div>
      
    
  </div>
        




{/* 

        
        <div className='row profilecard3'>
          <div className='col'>
          <img src={Img} className='profileimage'/>
          <div className=''>
          Mr. Venkat  CEO, Atomstate 
          </div>
          </div>
          <div className='col profilecardcontent'>
          A Business Strategist out to revolutionise AIML enabled problem solving solutions. 

          </div>
        </div> */}







  <div class="card dark">
      <div style={
        {display:"flex",
        justifyContent:"center",
        alignContent:"center",
        flexDirection:"column",
        alignItems:"center",
        paddingLeft:"1em",margin:"0.01em"}}>
    <img src={Img} class="card-img-top" alt="..."/>
    
    {/* <h5>C.E.O of PerspectAI.</h5> */}
    </div>
     <div class="text-section" 
     style={
      {display:"flex",
      justifyContent:"center",
      alignContent:"center",
      flexDirection:"column",
      }}>
        <h3 style={{color:"#080808",textAlign:"right",marginLeft:"-2.5em"}}>Sunil Yadavalli<span style={{fontSize:'0.7em'}}> Head of business strategy IDS</span>.</h3>
        {/* <h1 class="card-title" style={{marginRight:"1.2em",paddingTop:"1em"}}></h1> */}
        <p class="card-text" style={{paddingTop:"1em",wordSpacing:"0.01em",fontSize:"3vw"}}>Introducing Sunil Subrahmanyam Yadavalli, the brilliant Head of Business Strategy at Information Data Systems (IDS) and a proud native of Hyderabad. With a robust professional journey, Sunil's expertise extends from a Programmer Analyst at Cognizant to Management Intern roles at Maeflower Consulting and July Systems (Acquired by Cisco). Their academic prowess is equally impressive, holding an MBA in Systems and Finance from Symbiosis Institute of Digital & Telecom Management and a Master's Degree in Computer Software Engineering from Vellore Institute of Technology. Sunil, a lifelong learner, has garnered certifications including "Blockchain Business Models" from Duke University, showcasing a commitment to staying at the forefront of technological evolution

</p>
      </div>
      
    
  </div>
{/*         
        <div className='row profilecard4'>
          <div className='col'>
          <img src={Img} className='profileimage'/>
          <div className=''>
          Investors/venture capitalists
          </div>
          </div>
          <div className='col profilecardcontent'>
          Investors/venture capitalists
          </div>
        </div> */}

< div  style={
          {display:"flex",
          justifyContent:"center",
          alignContent:"center"}}>
        <button className='session_button' 
        style={
          {marginTop:"0.5em",
          fontWeight:"bold",
          marginBottom: "3em"}}>Register For Session</button>
        </div>




    <div className='curve1'>
    {/* <img src={Ellipse3} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse3 '/> */}
    </div>

     <div className='curve2'>
    {/* <img src={Ellipse3} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse3 '/> */}
    </div>
        


      <div style={{display:"flex",justifyContent:"center"}}>
      <div className='mark' >
        MARKETING WORKSHOP
      </div>
      </div>
      <div className='marketingcontent' style={{textAlign:"center",maxWidth:"60%",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"23vw",marginTop:"4em"}}>
      Dive into the world of marketing and learn about the art of building brands. Join us for a workshop where you learn secrets of impactful branding. Elevate your skills and transform your ideas into extraordinary success stories! Are you ready to unlock the power of tech- savvy marketing?


      </div>
    
    

      
    <div className='xyz' style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"1em"}}>

          <img src={Img} className='profileimage' style={{borderRadius:"50%",height:"38vh"}}/>
          
         
    </div>
          <div style={{textAlign:"center"}}>NAME1</div>


      < div  style={
          {display:"flex",
          justifyContent:"center",
          alignContent:"center"}}>
        <button className='session_button' 
        style={
          {marginTop:"0.5em",
          fontWeight:"bold",
          marginBottom: "3em"}}>Register For Workshop</button>
        </div>
    <Footer1/>
  </div>
  )
}

export default WPD



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Ellipse from '../assets/Ellipse.svg';
// import './WPD.css';
// import Line1 from '../assets/Line1.svg';
// import Arrow from '../assets/Arrow 1.svg'
// // import Comp2 from './Comp2';
// import Line2 from '../assets/Line 11.svg';
// import Line3 from '../assets/Line 9.svg';
// import Ellipse2 from '../assets/Ellipse 13 (2).svg'; 
// import Img from '../assets/img_avatar.png';
// import Ellipse3 from '../assets/Ellipse 13 (3).svg';
// import GDSC from '../assets/GDSC.png';
// import A from '../assets/1.jpeg';


// function WPD() {
//   return (
//     <div className='main3'>   
//         {/* <h3 className='ecficio'>ECFICIO 6.0H</h3> */}
//         <div>
//           {/* <img src={Ellipse} className='col-8 col-sm-8 col-md-8  col-lg-8 float-start' /> */}
//         </div>
//         <div>
//           <img src={Line1} className='col-6 col-sm-6 col-md-6  col-lg-6 line1' />
//           <img src={Line2} className='col-5 col-sm-5 col-md-5  col-lg-5   line2' />
//           <img src={Line3} className='col-4 col-sm-4 col-md-4  col-lg-4   line3' />
//           {/* <img src={Arrow} href='/' className='col-1 col-sm-1 col-md-1 col-lg-1   arrow'/> */}
//         </div>
//         <button className='button '>REGISTER NOW</button>

//         <div className='gdsc'>
//           GDSC PANEL DISCUSSION
//         </div>
//         <img src={GDSC} className='gdscimg' />
        
//         {/* <img src={Ellipse2} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse2 '/> */}
//         <div className='panelcontent'>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
//           took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
//         </div>
        
//         <div className='row profilecard'>
//           <div className='col'>
//           <img src={A} className='profileimage'/>
//           <div className=''>
//           Mr. Jignesh Talasila Co-Founder & C.E.O of PerspectAI. 
//           </div>
//           </div>
//           <div className='col profilecardcontent'>
//           At PerspectAI, the mission is to leverage psychometrics and new-age technologies to understand an individual's True Potential 
//           and bridge the gap between jobs and job seekers.
//           </div>
//         </div>

//         <div className='row profilecard2'>
//           <div className='col'>
//           <img src={Img} className='profileimage'/>
//           <div className=''>
//           Mr. Madhu Vadlamani
//  GDC
//           </div>
//           </div>
//           <div className='col profilecardcontent'>
//           Employee with an entrepreneurial mindset”, data analyst.(Skills- Data Analytics, Artificial Intelligence (AI) , Cloud Computing , Content Management , Business Intelligence) 

//           </div>
//         </div>
//         <div className='row profilecard3'>
//           <div className='col'>
//           <img src={Img} className='profileimage'/>
//           <div className=''>
//           Mr. Venkat  CEO, Atomstate 
//           </div>
//           </div>
//           <div className='col profilecardcontent'>
//           A Business Strategist out to revolutionise AIML enabled problem solving solutions. 

//           </div>
//         </div>
//         <div className='row profilecard4'>
//           <div className='col'>
//           <img src={Img} className='profileimage'/>
//           <div className=''>
//           Investors/venture capitalists
//           </div>
//           </div>
//           <div className='col profilecardcontent'>
//           Investors/venture capitalists
//           </div>
//         </div>

        
//       <div className='marketing'>
//         MARKETING WORKSHOP
//       </div>
//       <div className='marketingcontent'>
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
//       standard dummy text ever since 
//       the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//        It has survived not only five centuries
//       </div>
    
    
//     <div className='curve'>
//     {/* <img src={Ellipse3} className='col-8 col-sm-8 col-md-8  col-lg-8 ellipse3 '/> */}
//     </div>

//     <div className='xyz'>

//           <img src={Img} className='profileimage'/>
//           <div>NAME1</div>
          
         
//     </div>
    
//   </div>
//   )
// }

// export default WPD