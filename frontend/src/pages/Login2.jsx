import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { login, clearErrors } from "../../src/actions/userActions"
import { useDispatch, useSelector } from 'react-redux'


const Login2 = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading] = useState()
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)
  console.log("auth desde login",auth)
  // const { isAuthenticated, error, loading } = useSelector(state => state.auth)

  // useEffect(() => {
  //     if (isAuthenticated) {
  //         navigate("/")
  //     }
  //     if (error) {
  //         dispatch(clearErrors)
  //     }
  // }, [dispatch, isAuthenticated, error, navigate])

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
  }



  // const signIn = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

  //     const user = userCredential.user;
  //     console.log(user);
  //     setLoading(false);
  //     toast.success("Iniciando sesión...");
  //     navigate("/checkout");
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error.message);
  //   }
  // };

  return (
    <Helmet title="Iniciar sesión">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">cargando...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Iniciar sesión ⏩</h3>

                <Form className="auth__form" onSubmit={submitHandler}>
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

export default Login2;
