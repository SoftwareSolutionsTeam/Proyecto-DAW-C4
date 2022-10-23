import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../assets/styles/checkout.css";
import {useSelector} from 'react-redux'

const Checkout = () => {

const totalQty = useSelector(state => state.cart.totalQuantity)
const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Datos de facturación</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Ingrese su nombre" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Ingrese su correo" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Numero telefono" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Direccion" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Departamento" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Minicipio" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total cant: <span>{totalQty} productos</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Envío: <br />
                    envío gratis
                  </span>
                  <span>$0</span>
                </h6>

                <h4>
                  Total compra: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn">Ordenar </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Checkout;
