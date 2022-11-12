import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { login, clearErrors } from "../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'

//import { toast } from "react-toastify";

const Logueo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <Helmet title="Iniciar sesión">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">cargando..🔄</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Iniciar sesión -</h3>

                <Form className="auth__form" onSubmit="">
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Ingrese su correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <button type="submit" className="buy__btn auth__btn">
                    Entrar
                  </button>
                  <p>
                    ¿No tienes cuenta? <Link to="/registro">crea una aquí</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Logueo;
