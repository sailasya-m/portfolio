import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bakery_1_1000x600.jpg";
import projImg2 from "../assets/img/petshop_2_1000x600.jpg";
import projImg3 from "../assets/img/clothing_2_1000x600.jpg";
import projImg4 from "../assets/img/restaurant_2_1000x600.jpg";
import projImg5 from "../assets/img/coffe1_2_1000x600.jpg";
import projImg6 from "../assets/img/travel-web_2_1000x600.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "The Baking Factory",
      description: "HTML,CSS,JS",
      imgUrl: projImg1,
    },
   
    {
      title: "TRVL-Travel Bookign website",
      description: "Reactjs",
      imgUrl: projImg6,
    },
    
    {
      title: "Clothing Store",
      description: "HTML,CSS,JS",
      imgUrl: projImg3,
    },
    {
      title: "Coffee Shop",
      description: "Reactjs",
      imgUrl: projImg5,
    },
    {
      title: "The Pet Shop",
      description: "HTML,CSS,JS",
      imgUrl: projImg2,
    },
   
    
    {
      title: "Restaurant Website",
      description: "HTML,CSS,JS",
      imgUrl: projImg4,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my projects, each a testament to my dedication and expertise. They span across various fields and showcase my ability to deliver results. I'm proud to present them as evidence of my skills and accomplishments, ready to tackle new challenges ahead.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Overview</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>These are my projects, each a testament to my dedication and expertise. They span across various fields and showcase my ability to deliver results. I'm proud to present them as evidence of my skills and accomplishments, ready to tackle new challenges ahead.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>These are my projects, each a testament to my dedication and expertise. They span across various fields and showcase my ability to deliver results. I'm proud to present them as evidence of my skills and accomplishments, ready to tackle new challenges ahead.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
