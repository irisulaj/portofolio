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

 <br/> A commited web developer and a software engineer student. I am a Full Stack Web Developer from Albania with HTML, CSS, Bootstrap React.js, PHP, Node.js and MySQL.
<br/> In 2020, I graduated with excellent results in Economic Informatics Bachelor's Degree.  <br/> Now I am following Master's Degree in Informatics Engineering at the<a href = "https://uet.edu.al/new/" >European University of Tirana.</a>
Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
<br/>
<br/>
       
{/* Linqet*/}
           
       <Col className="d-flex justify-content-center flex-wrap">

       <div>
                  <a href="#contact">
                  <Button className = "m-2" variant="outline-primary" > 
                     Contact &nbsp;
                      <i className=" fa fa-mobile-alt"></i>
                  </Button>
                  </a>
        </div>

        <div>
                  <a href=" " target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Resume  &nbsp;
                      <i className=" fa fa-file"></i>
                      </Button>
                    </a>
        </div>

        <div>
                  <a href=" " target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub &nbsp;
                      <i className=" fab fa-github"></i>
                      </Button>
                    </a>

        </div>
                  
        <div>
                  <a href=" " target="_blank" rel="noopener noreferrer">
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