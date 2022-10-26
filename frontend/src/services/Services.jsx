import React from "react";
import { Container, Row, Col } from "reactstrap";
//import {motion} from 'framer-motion'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import "./services.css";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <div className="service__item" style={{background: `${item.bg}`}} >
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
