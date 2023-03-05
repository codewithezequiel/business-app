import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../../src/logo.svg";
import logo1 from "../../src/logo.svg";
import logo2 from "../../src/logo.svg";
import logo3 from "../../src/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={logo1} alt="Icon" />
              </a>
              <a href="#">
                <img src={logo2} alt="Icon" />
              </a>
              <a href="#">
                <img src={logo3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
