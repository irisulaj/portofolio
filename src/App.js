
import React from "react";

//components

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";

import BgImage from "./assets/img/parallex/background.webp"; 

import "./App.css";
import Container from 'react-bootstrap/Container'
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";



const App = () => {
  return (
    <div  className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>

      {/* Seksioni About me*/}

    <div>
      <Parallax  blur={{ min: -30, max: 30 }} bgImage={BgImage}  bgImageAlt="back"  strength={-200} >
     
     <div>
        <Container className="container-box rounded">
          
          <Fade duration={500}>

              <About/>

          </Fade>

        </Container>
      </div>
      </Parallax>
   </div>

    </div>
  );
}

export default App;
