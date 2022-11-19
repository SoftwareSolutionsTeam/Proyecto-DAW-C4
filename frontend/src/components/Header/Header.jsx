import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import userIcon from "../../img/user-icon.png";
import { Link } from "react-router-dom";

import useAuth from "../../customs/useAuth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
//import ShowOnLogin from "../HiddenLink/HiddenLink";
//import { AdminOnlyLink } from "../AdminOnlyRoute/AdminOnlyRoute";

import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slices/authSlice";

import {
  faBagShopping,
  faHeart,
  faBars,
  //faGear,
  faRightFromBracket,
  //faUserPlus,
  faFolderOpen,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import logo from "../../img/logo.png";

import {
  Container,
  Row,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
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
  const [dropdown, setDropdown] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const dispatch = useDispatch();

  const accionarDropdown = () => {
    setDropdown(!dropdown);
  };

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
  const NavigateToHome = () => {
    navigate("/");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("usuario", user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  // const [user] = useState()

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wraper">
            <div className="logo">
              <img
                src={logo}
                onClick={NavigateToHome}
                alt="logo de la tienda"
              />
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
            <Link to="/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
              {/* <motion.span
                whileTap={{ scale: 1.2 }}
                className="admin__icon"
                onClick={NavigateToAdmin}
              >
                <FontAwesomeIcon icon={faGear} className="ad__icon" />
              </motion.span> */}
              <a href="#home" style={{ color: "#ff7722" }}>
                {displayName}
              </a>
              <span className="fav__icon">
                <FontAwesomeIcon icon={faHeart} className="icon__heart" />
                <span className="badge">2</span>
              </span>
              <motion.span
                whileTap={{ scale: 1.2 }}
                className="cart__icon"
                onClick={NavigateToCart}
              >
                <FontAwesomeIcon icon={faBagShopping} className="icon__bag" />
                <span className="badge">{totalQuantity}</span>
              </motion.span>
              {/* <div className="profile">
                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Cerrar sesion</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Registrar</Link>
                      <Link to="/login">Acceder</Link>
                    </div>
                  )}
                </div>
              </div> */}
              {/* <ShowOnLogin></ShowOnLogin> */}
              <Dropdown isOpen={dropdown} toggle={accionarDropdown}>
                <DropdownToggle caret className="btn__accesos">
                  <span className="profile">
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={currentUser ? currentUser.photoURL : userIcon}
                      alt=""
                      onClick={toggleProfileActions}
                    />
                  </span>
                </DropdownToggle>
                <DropdownMenu className="dropmenu">
                  {/* <DropdownItem className="btn__dropItem">
                    <FontAwesomeIcon
                    icon={faUserPlus}
                    className="icon__acces"
                    />
                    <Link to="/registro">Regístrate</Link>
                  </DropdownItem> */}

                  {/* <AdminOnlyLink></AdminOnlyLink> */}

                  <DropdownItem
                    className="btn__dropItem"
                    onClick={NavigateToAdmin}
                  >
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="icon__acces"
                    />
                    Administrativo
                  </DropdownItem>

                  <DropdownItem className="btn__dropItem">
                    <FontAwesomeIcon
                      icon={faAddressCard}
                      className="icon__acces"
                    />
                    Mi cuenta
                  </DropdownItem>

                  <DropdownItem className="btn__dropItem">
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className="icon__acces"
                    />
                    <Link to="/" onClick={logout}>
                      Cerrar sesión
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              
              
              {/* <Link to="/login">Acceder</Link>
              <Link to="/signup">Registrar</Link> */}
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
