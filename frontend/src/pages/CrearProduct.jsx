import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../assets/styles/crear-product.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
  faUpload,
  faTowerBroadcast,
} from "@fortawesome/free-solid-svg-icons";

//import {useDispatch, useSelector} from 'react-redux'
//import { useEffect } from "react";
//import {toast} from 'react-toastify'
//import { PRODUCT_CREATE_SUCCESS } from "../constants/productConstants";
//import productos from "../../../backend/models/productos";
import { Link } from "react-router-dom";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";

const CrearProduct = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState();
  const [inventario, setInventario] = useState();
  const [imagen, setImagen] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setLoading(true);
    const res = await fetch(
      "http://api.cloudinary.com/v1_1/tecnostore/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    //console.log(res)
    setImagen(file.secure_url);
    //console.log(file.secure_url)
    setLoading(false);
  };

  function nuevoProducto(event) {
    event.preventDefault();
    var producto = {
      imagen: imagen,
      nombre: nombre,
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
      inventario: inventario,
    };
    //console.log(producto);

    axios
      .post("/producto/nuevo", producto)
      .then((res) => {
        //toast.success('El producto se creó con éxito')
        Swal.fire("Nuevo producto creado..🆗");
        // navegar("/productAd");
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <Helmet title={"Crear producto"}>
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

        {/* crear producto */}

        <div className="producto">
          <div className="productoTitleContainer">
            <h1 className="productoTitle">Crear nuevo producto</h1>
            {/* <button className="btn__modificar">Modificar</button> */}
          </div>

          <div className="userUpdate">
            {/* <span className="userUpdateTitle">Editar</span> */}
            <form className="userUpdateForm" onSubmit={nuevoProducto}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Categoría</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={categoria}
                    onChange={(e) => {
                      setCategoria(e.target.value);
                    }}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Descripción</label>
                  <textarea
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={descripcion}
                    onChange={(e) => {
                      setDescripcion(e.target.value);
                    }}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Precio</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={precio}
                    onChange={(e) => {
                      setPrecio(e.target.value);
                    }}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Stock</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={inventario}
                    onChange={(e) => {
                      setInventario(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" className="btn__modificar">
                  Crear
                </button>
              </div>

              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <label htmlFor="file" className="text__up">
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="userUpdateIcon"
                    />
                    <span>Cargar imagen</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    value=""
                    onChange={uploadImage}
                  />
                  {loading ? (
                    <h3>Cargando imagen...</h3>
                  ) : (
                    <img
                      className="userUpdateImg"
                      src=""
                      alt="imagen-producto"
                    />
                  )}
                </div>
              </div>
            </form>

            {/* <button onClick={nuevoProducto} className="btn__modificar">Crear</button> */}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default CrearProduct;
