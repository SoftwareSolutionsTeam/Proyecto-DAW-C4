import React, { useRef, useEffect } from "react";
import "./header.css";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import useAuth from "../../customs/useAuth";
import userIcon from "../../img/user-icon.png";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import {
  faBagShopping,
  faHeart,
  faBars,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import logo from "../../img/logo.png";

import { Container, Row } from "reactstrap";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Inicio",
  },
  {
    path: "shop",
    display: "Tienda",
  },
  {
    path: "cart",
    display: "Carrito",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);

  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("sesion cerrada");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  

  const navigate = useNavigate();

  const NavigateToCart = () => {
    navigate("/cart");
  };
  const NavigateToAdmin = () => {
    navigate("/admin");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wraper">
            <div className="logo">
              <img src={logo} alt="logo de la tienda" />
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <motion.span
                whileTap={{ scale: 1.2 }}
                className="admin__icon"
                onClick={NavigateToAdmin}
              >
                <FontAwesomeIcon icon={faGear} className="ad__icon" />
              </motion.span>
              <span className="fav__icon">
                <FontAwesomeIcon icon={faHeart} />
                <span className="badge">2</span>
              </span>
              <motion.span
                whileTap={{ scale: 1.2 }}
                className="cart__icon"
                onClick={NavigateToCart}
              >
                <FontAwesomeIcon icon={faBagShopping} />
                <span className="badge">{totalQuantity}</span>
              </motion.span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Cerrar sesion</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      {/* <Link to="/signup">Registrar</Link>
                      <Link to="/login">Acceder</Link> */}
                    </div>
                  )}
                </div>
              </div>
              <Link to="/login">Acceder</Link>
              <Link to="/signup">Registrar</Link>
              <div className="mobil__menu">
                <span>
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
