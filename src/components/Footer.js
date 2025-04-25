import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/gnp-logo-5.png';
import linkedin_icon from "../assets/img/nav-icon1.svg";
import github_icon from "../assets/img/github-icon-240.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/girish-gopalakrishnan-nair-586945134/" target="_blank"><img src={linkedin_icon} alt="" /></a>
                <a href="https://github.com/girish-creator" target="_blank"><img src={github_icon} alt="" /></a>
                <a href="https://www.instagram.com/girish_gk_n/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
