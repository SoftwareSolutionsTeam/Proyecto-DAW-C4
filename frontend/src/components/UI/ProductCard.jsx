import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
//import productImg from "../../assets/images/pcs/lenovo/lenovo-laptop-ideapad-l3-hero.png";
import { motion } from "framer-motion";
import "../../assets/styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item._id,
        nombre: item.nombre,
        price: item.precio,
        imagen: item.imagen,
      })
    );

    toast.success('Producto añadido a la bolsa')
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imagen} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item._id}`}>{item.nombre}</Link>
          </h3>
          <span>{item.categoria}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between">
          <span className="price">${item.precio}</span>
          <motion.div
            whileTap={{ scale: 1.3 }}
            className="icon-bottom"
            onClick={addToCart}
          >
            <FontAwesomeIcon icon={faBagShopping} />
          </motion.div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
