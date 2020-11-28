import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./projects-timeline.style.css"

//Frontend
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";

//Backend
import L_PHP  from "../../assets/img/skills/php-1.svg";

//Databases
import L_MYSQL from "../../assets/img/skills/mysql.svg";

//Hosting Platforms
import L_WORDPRESS from "../../assets/img/skills/wordpress-blue.svg";

//Programming Languages
import L_C from "../../assets/img/skills/c.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

//Projects
import L_EXAMINATION from "../../assets/img/projects/e2.jpg";
import L_BANKING from "../../assets/img/projects/banking.jpg";
import L_MONEYRISE from "../../assets/img/projects/moneyrise.jpg"
import L_TRAVEL from "../../assets/img/projects/travel2.jpg"


const ProjectTimeline = () =>{


    return (
        <div id="mywork">
              <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

       {/* Examination Management System */}
       <ImageEvent
            date="10/07/2020"
            className="text-center"
            text="Examination Management System"
            src = {L_EXAMINATION}
            alt="Examination Management System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DESCRIPTION
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a dynamic examination management system written in PHP
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create student accounts</li>
                          <li>Add, update and delete exams</li>
                          <li>Take exams, check answers & give instant results</li>
                          <li>Register next season exams</li>
                        </ul>
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_MYSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              My SQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#examination_management_system"
               
                >
                 SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#examination_management_system"
                 
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#examination_management_system"
                 
                >
                WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

  {/* Online Banking System */}
  <ImageEvent
            date="07/06/2019"
            className="text-center"
            text="Online Banking System"
            src = {L_BANKING}
            alt="Online Banking System"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DESCRIPTION
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Online Banking System is a platform which helps you manage your bank account in no time
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create user account</li>
                          <li>Check balance</li>
                          <li>View statements</li>
                        </ul>
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_MYSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              My SQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#online_banking_system"
              
                >
                 SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#online_banking_system"
                 
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#online_banking_system"
                 
                >
                WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

  {/* MoneyRise Financial Blog */}
  <ImageEvent
            date="02/04/2020"
            className="text-center"
            text="MoneyRise Financial Blog"
            src = {L_MONEYRISE}
            alt="MoneyRise Financial Blog"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DESCRIPTION
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Moneyrise is a financial website made with WordPress
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Investment guide</li>
                          <li>Gold investment articles</li>
                          <li>Articles concerning retirement plan</li>
                        </ul>
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_WORDPRESS}
                                alt="WORDPRESS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              WordPress
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://moneyrise.net/"
                 target="_blank"
                >
                 SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#money_rise_net"
                 
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#money_rise_net"
                 
                >
                WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

  {/* Travel Agency Management*/}
  <ImageEvent
            date="02/04/2020"
            className="text-center"
            text="Travel Agency Management"
            src = {L_TRAVEL}
            alt="Travel Agency Management"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DESCRIPTION
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>  Travel Agency Management is C++ program that helps agencies keep track of their bookings.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add trip bookings</li>
                          <li>Add client's data</li>
                          <li>Modify bookings</li>
                          <li>Display bookings</li>
                        </ul>
                        <hr />
                        <strong>Tools:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                             src={L_C}
                                alt="C++"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#travel_agency_management"
                 
                >
                 SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#travel_agency_management"
                 
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#travel_agency_management"
                 
                >
                WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>
    </Timeline>

        </div>
    )
}

export default ProjectTimeline