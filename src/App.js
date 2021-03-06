import React from "react";

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import ProjectTimeline from "./components/projects-timeline/projects-timeline.component";
import FooterBanner from "./components/footer/footer.component"

//pages
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Education from "./pages/experience/experience.component"; 
//import Contact from "./pages/contact-form/contact-form.component"

import BgImage from "./assets/img/parallex/background.webp"; 

import "./App.css";

import Container from 'react-bootstrap/Container'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
//import Particles from "react-particles-js";
//import { particlesOptions } from "./particlesOptions";


const App = () => {
  return (
    <div  style={{ position: "relative" }}>
      <MyNavbar/>
      {/*<Particles
        className="particles particles-box"
        params={particlesOptions}
      />*/ }
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

      {/* Seksioni MyWork*/}
<hr/>
   <div>
     
     <div>
        <Container className="container-box rounded">
          
          <Slide bottom duration={500}>

          <ProjectTimeline/>

          </Slide>

        </Container>
      </div>
   </div>

         {/* Seksioni Contact me
<hr/>
        <div className="app2">
        <Slide bottom duration={1000}>
          <Contact/>
          </Slide>
          </div> */}
{/*Footer*/}
     
          <FooterBanner/>     
    </div>
  );
}

export default App;
