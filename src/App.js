
import React from "react";

//components

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Education from "./pages/experience/experience.component"; 

import BgImage from "./assets/img/parallex/background.webp"; 

import "./App.css";
import Container from 'react-bootstrap/Container'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
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

{/* Seksioni Skills*/}
<hr/>
   <div>
     
     <div>
        <Container className="container-box rounded">
          
          <Slide bottom duration={500}>

          <Skills/>

          </Slide>

        </Container>
      </div>
   </div>

       {/* Seksioni Education */}
       <hr/>
     <div>
        <Container className="container-box rounded">
          
          <Fade duration={500}>

              <Education/>

          </Fade>

        </Container>
      </div>

    </div>
  );
}

export default App;
