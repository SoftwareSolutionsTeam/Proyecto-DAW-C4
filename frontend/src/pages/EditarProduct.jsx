import React from "react";
import "../assets/styles/editar-product.css";
import Helmet from "../components/Helmet/Helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const EditarProduct = () => {
  return (
    <Helmet title={"Editar producto"}>
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

        {/* modificar producto */}

        <div className="producto">
          <div className="productoTitleContainer">
            <h1 className="productoTitle">Modificar Producto</h1>
            {/* <button className="btn__modificar">Modificar</button> */}
          </div>


          <div className="userUpdate">
            {/* <span className="userUpdateTitle">Editar</span> */}
            <form className="userUpdateForm">

              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Referencia</label>
                  <input
                    type="text"
                    placeholder="jhdy345"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    placeholder="Audifonos Inalanbricos"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Categoría</label>
                  <input
                    type="text"
                    placeholder="Dispositivos"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Descripción</label>
                  <textarea
                    type="text"
                    placeholder="Auriculares estereo recargables"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Precio</label>
                  <input
                    type="text"
                    placeholder="599.00"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Stock</label>
                  <input
                    type="text"
                    placeholder="85"
                    className="userUpdateInput"
                  />
                </div>

                <button className="btn__modificar">Actualizar</button>
              </div>


              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://www.sony.com.co/image/1cc1c23c2224adedbaaa8c3e656bef23?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
                    alt=""
                  />
                  <label htmlFor="file" className="text__up"> 
                    <FontAwesomeIcon icon={faUpload} className="userUpdateIcon" />
                    <span >Cargar imagen</span>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} /> 
                  
                </div>
                
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </Helmet>
  );
};

export default EditarProduct;
