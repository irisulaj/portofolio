import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile1 from '../../assets/img/profile/Profile1.webp'

import './about.style.css'

const About = () => {

    return (
        <div id="about">
            <div className="about">
            <h1  className="pt-3 text-center font-details pb-3">ABOUT ME</h1>

<Container>
<Row className="pt-3 pb-5 align-items-center">

    <Col xs={12} md={6}>

        {/* Fotoja e profilit*/}
    <Row className="justify-content-center mb-2 mr-2 ">

    <Image className="profile justify-content-end" alt="profile" src={Profile1} thumbnail fluid />
    </Row>

    </Col>

{/* Pershkrimi, About me*/}

    <Col xs={12} md={6}>

        <Row  className=" align-items-start p-2 my-details rounded">
     {/* Pershkrimi*/}
     
Hello, My name is
 <strong>&nbsp;Shaqir Sulaj</strong>

 <br/> A commited web developer and a software engineer student. 
 <br/>I am a Full Stack Web Developer with HTML, CSS, Bootstrap React.js, PHP and MySQL. 
<br/>I am very fond of new development technologies and I consistently make efforts to improve myself.
<br/> Currently I am studying Node js and MongoDB, in addition to my back end set of skills.
<br/> In 2020 I graduated with excellent results in Economic Informatics Bachelor Degree, which is a strong indicator
of my abilities to get things done within the deadline.

       
{/* Linqet*/}
           
       <Col className="d-flex justify-content-center flex-wrap">

       <div>
                  <a href="#contactfooter">
                  <Button className = "m-2" variant="outline-primary" > 
                     Contact &nbsp;
                      <i className=" fa fa-mobile-alt"></i>
                  </Button>
                  </a>
        </div>


        <div>
                  <a href="https://github.com/irisulaj/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub &nbsp;
                      <i className=" fab fa-github"></i>
                      </Button>
                    </a>

        </div>
                  
        <div>
                  <a href="https://www.linkedin.com/in/shaqir-sulaj-3370051aa" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                          Linked &nbsp;
                      <i className=" fab fa-linkedin"></i>
                      </Button>
                  </a>

        </div>
        </Col>
     </Row>
   </Col>
  </Row>
</Container>
</div>
</div>
    )
}

export default About