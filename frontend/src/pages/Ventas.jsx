import React from "react";
import "../assets/styles/productAd.css";
import Helmet from "../components/Helmet/Helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Ventas = () => {
  return (
    <Helmet title={"Lista de ventas"}>
      <div className="content__board">
        <div className="siderbar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <Link to="/admin" className="link">
                <h3 className="sidebarTitle">Zona Admin</h3>
              </Link>

              <ul className="sidebarList">
                <li className="sidebarListItem active">
                  <FontAwesomeIcon icon={faUsers} className="sidebarIcon" />
                  Clientes
                </li>

                <Link to="/productAd" className="link">
                  <li className="sidebarListItem active">
                    <FontAwesomeIcon icon={faStore} className="sidebarIcon" />
                    Productos
                  </li>
                </Link>

                <Link to="/ventas" className="link">
                  <li className="sidebarListItem active">
                    <FontAwesomeIcon
                      icon={faCreditCardAlt}
                      className="sidebarIcon"
                    />
                    Ventas
                  </li>
                </Link>

                <Link to="/inventario" className="link">
                <li className="sidebarListItem active">
                  <FontAwesomeIcon
                    icon={faWarehouse}
                    className="sidebarIcon"
                  />
                  Inventario
                </li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
        Lista de productos vendidos
      </div>
    </Helmet>
  );
};

export default Ventas;
