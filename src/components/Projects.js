import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webdevimg from "../assets/img/project-img-1.jpg";
import softimg from "../assets/img/project-img-3.jpg";
import testautoimg from "../assets/img/project-img-4.jpg";
import bankimg from "../assets/img/project-img-5.jpg";
import carautoimg1 from "../assets/img/project-img-6.jpg";
import carautoimg2 from "../assets/img/project-img-7.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ETL Tool Development",
      description: "Design, Development & Deployment of ETL tools on a platform",
      imgUrl: bankimg,
    },
    {
      title: "Web Development",
      description: "Design & Development with Flask on Linux",
      imgUrl: webdevimg,
    },
    {
      title: "Backend Development",
      description: "Design & Development with Django REST API on Linux",
      imgUrl: softimg,
    },
    {
      title: "Test Automation Framework Development",
      description: "Design, Development & Testing with Squish GUI Tool on Linux",
      imgUrl: testautoimg,
    },
    {
      title: "Car Infotainment Automation Testing",
      description: "Automation & Testing of Android and IOT devices with CSharp, Selenium on Windows",
      imgUrl: carautoimg1,
    },
    {
      title: "Car Infotainment and System Testing",
      description: "Automation and Manual Testing of IOT devices with Squish, Python on Windows",
      imgUrl: carautoimg2,
    },
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
