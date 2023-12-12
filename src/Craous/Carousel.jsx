import Carousel from 'react-bootstrap/Carousel';
import c1 from '../carousel/c1.jpg'
import c2 from '../carousel/c2.jpg'
import c3 from '../carousel/c3.jpg'
import c4 from '../carousel/c4.jpg'
import c5 from '../carousel/c5.jpg'
import c6 from '../carousel/c6.JPG'
import c7 from '../carousel/c7.jpg'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="blue" style={{marginTop:"50px"}}>
      <Carousel.Item >
        <img  style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item >
        <img  style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c4}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img  style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c5}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img  style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c6}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img  style={{height:"40em",borderRadius:"20px"}}
          className="d-block w-100"
          src={c7}
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;