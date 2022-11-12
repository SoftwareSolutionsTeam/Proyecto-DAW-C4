import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../assets/styles/checkout.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  

  const navigate = useNavigate();
 //const datosCart = localStorage.getItem()

  const [telefono, setTelefono] = useState();
  const [direccion, setDireccion] = useState();
  const [departament, setDepartamento] = useState();
  const [ciudad, setCiudad] = useState();

  function nuevaOrden(event) {
    event.preventDefault();
    var orden = {
      numeroTel: telefono,
      direccion: direccion,
      departament: departament,
      ciudad: ciudad,
    };
    //console.log(orden);



    axios
      .post("/api/order/new", orden)
      .then((res) => {
        //toast.success('El producto se creó con éxito')
        Swal.fire("Nueva orden creada..✔");
        navigate("/shop");
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Datos de envío</h6>

              <Form className="billing__form" onSubmit={nuevaOrden}>
                <FormGroup className="form__group">
                  <input
                    type="number"
                    placeholder="Numero telefono"
                    value={telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Direccion"
                    value={direccion}
                    onChange={(e) => {
                      setDireccion(e.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Departamento"
                    value={departament}
                    onChange={(e) => {
                      setDepartamento(e.target.value);
                    }}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Ciudad"
                    value={ciudad}
                    onChange={(e) => {
                      setCiudad(e.target.value);
                    }}
                  />
                </FormGroup>
                  <button type="submit" className="buy__btn auth__btn">Ordenar </button>
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
                {/* <button type="submit" className="buy__btn auth__btn">Ordenar </button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Checkout;
