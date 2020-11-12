import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './my-carousel.style.css'

import Slide4 from '../../assets/img/carousal/slide4.webp'
import Slide5 from '../../assets/img/carousal/slide5.webp'
import Slide6 from '../../assets/img/carousal/slide6.webp'
import ScrollDown from '../scroll-down/scroll-down.component'

const MyCarousel = () =>{

    return (

        <div id="hello">

<Carousel  controls={false} indicators interval={2500} pause={false}>

  <Carousel.Item>
    <img className="d-block w-100 custom-img" src={Slide4} alt="First slide"/>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 custom-img" src={Slide5} alt="Second slide" />
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100 custom-img" src={Slide6}  alt="Third slide"/>
  </Carousel.Item>
</Carousel>
<ScrollDown/>
        </div>
    )
}


export default MyCarousel