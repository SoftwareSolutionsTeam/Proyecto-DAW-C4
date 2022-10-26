import React from "react";
import "../assets/styles/homeAd.css";
import Helmet from "../components/Helmet/Helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faArrowDown,
  faArrowUp,
  faWarehouse
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const HomeAd = () => {
  return (
            //  SIDEBAR
    <Helmet title={"Administrativo"}>
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

            {/* Zona Administrativa */}
        <div className="featured">
          <div className="content__body">
            <div className="featuredItem">
              <span className="featuredTitle">Productos vendidos</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">153</span>
                <span className="featuredMoneyRate">
                  -1.4%
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="featuredIcon negative"
                  />
                </span>
              </div>
              <span className="featuredSub">Comparado al último mes</span>
            </div>
            <div className="featuredItem">
              <span className="featuredTitle">Ventas</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$9.962</span>
                <span className="featuredMoneyRate">
                  1.4%
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="featuredIcon positive"
                  />
                </span>
              </div>
              <span className="featuredSub">Comparado al último mes</span>
            </div>
            <div className="featuredItem">
              <span className="featuredTitle">Ganancias</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$ 1.731</span>
                <span className="featuredMoneyRate">
                  +2.4%
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="featuredIcon positive"
                  />
                </span>
              </div>
              <span className="featuredSub">Comparado al último mes</span>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default HomeAd;
