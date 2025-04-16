import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webdevimg from "../assets/img/python-project.jpg";
import autoimg from "../assets/img/backenddev.jpg";
import autoiot from "../assets/img/autoiot.jpg";
import mercimg from "../assets/img/merc-auto.jpg";
import bmwimg from "../assets/img/bmw-auto.jpg";
import androidimg from "../assets/img/android.jpg";
import bankimg from "../assets/img/person-working-on-cloud.jpg";
import pinterimg from "../assets/img/hp-print-test.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const dev_projects = [
    {
      title: "ETL Tool Development",
      description: "Design, Development & Deployment of ETL tools using Python. ETL with Azure Data Factory",
      imgUrl: bankimg,
      hrefVal: "myportfolio/etl",
      projectName: "ETL Tool Development",
      startDate: "2021-01-01",
      endDate: "2021-12-31",
      skills: "Python, ADF, SQL, Azure, Docker, Airflow",
      fulldesc: "Design, Development & Deployment of ETL tools using Python. ETL with Azure Data Factory"
    },
    {
      title: "Full Stack Development",
      description: "Design, Development & Deployment with Flask, HTML and Javascript",
      imgUrl: webdevimg,
      hrefVal: "myportfolio/fullStack"
    },
    {
      title: "Backend Development",
      description: "Design & Development with Django REST API on Linux",
      imgUrl: autoimg,
      hrefVal: "#backend"
    }
  ];

  const auto_projects = [
    {
      title: "Test Automation Framework Development",
      description: "Design, Development & Testing with Squish GUI Tool on Linux",
      imgUrl: autoiot,
      hrefVal: "#automation"
    },
    {
      title: "Car Infotainment Automation Testing",
      description: "Automation & Testing of Android and IOT devices with CSharp, Selenium on Windows",
      imgUrl: mercimg,
      hrefVal: "#autoInfo"
    },
    {
      title: "Car Infotainment Automation Testing",
      description: "Automation of IOT devices with Squish, Python on Windows",
      imgUrl: bmwimg,
      hrefVal: "#iot"
    },
  ];
    const test_projects = [
    {
      title: "Car Infotainment and System Testing",
      description: "Automation and Manual Testing of IOT devices with Squish, Python on Windows",
      imgUrl: mercimg,
      hrefVal: "#system"
    },
    {
      title: "Printer System Testing",
      description: "Manual Testing of Printers",
      imgUrl: pinterimg,
      hrefVal: "#printer"
    },
    {
      title: "Android Testing",
      description: "Manual Testing of Android Tablets and Phones",
      imgUrl: androidimg,
      hrefVal: "#android"
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
                <p>My projects showcase a diverse range of skills from development to automation and testing.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Automation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Testing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} >
                    <Tab.Pane eventKey="first" >
                      <Row>
                        {
                          dev_projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          auto_projects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          test_projects.map((project, index) => {
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
