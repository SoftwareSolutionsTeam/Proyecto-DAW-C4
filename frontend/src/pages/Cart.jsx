import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//import tdImg from "../assets/images/accesorios/varios/027242923232-001-750Wx750H.jpg";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Bolsa de compras">
      <CommonSection title="Lista de compras" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">
                  No hay productos en la lista
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <div>
                <button className="buy__btn w-100 mb-2">
                  <Link to="/checkout">Realizar Compra</Link>
                </button>
                <button className="buy__btn w-100 mt-2">
                  <Link to="/shop">Seguir comprando</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imagen} alt="" />
      </td>
      <td>{item.nombre}</td>
      <td>{item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.span whileTap={{ scale: 1.2 }} onClick={deleteProduct}>
          <FontAwesomeIcon icon={faTrash} />
        </motion.span>
      </td>
    </tr>
  );
};

export default Cart;
