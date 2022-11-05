import React from "react";
import "./footer.css";

import { Container, Row, Col } from "reactstrap";
//import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo__footer">
              <img src={logo} alt="logo de la tienda" />
            </div>
          </Col>
          <Col lg="3"></Col>
          <Col lg="2"></Col>
          <Col lg="3"></Col>
        </Row>
        <p className="footer__bottom text-center"> &copy; 2022 Developed by Software Solutions, Co. </p>
      </Container>
    </footer>
  );
};

export default Footer;
