import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
import L_UET from "../../assets/img/experience/uetlogo.webp";
import "./experience.style.css";
const Education = () => {
 
    return (
        <div id = "education">

          
               <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
<Jumbotron className = "jumbo-style">
  <Container>

        <Tilt option = { { max: 25 }} >

      <Card>
      <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_UET} alt="EUT logo"  /> 
              </Card.Header>

              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">MSC Software Engineer: November 2020 - Present</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">BA DEGREE Economic Informatics: 2017 - 2020</strong>
                    <br />
                    <strong></strong> 
                    <br />
                    
                    <ul className="text-left">
                      <li>Good knowledge of <strong>Object-Oriented Programming.</strong></li>
                      <li>Good knowledge of <strong>relational databases and query executions.</strong></li>
                      <li>Capable of building and executing <strong> CRUD operations in MySql.</strong></li>
                      <li>My degree project was a dynamic and complex <strong>online examination system written in PHP</strong>.</li>
                      <li>Three consecutive years part of <strong>“Excellence Network”</strong> at the European University of Tirana.</li>
                     <li>Certified proficiency in written & spoken English,<strong> C1 level </strong></li>
                      {/*  */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>

      </Card>
        </Tilt>

   </Container>
 </Jumbotron>

</div>

    )

}

export default Education