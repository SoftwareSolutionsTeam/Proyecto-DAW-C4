import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../assets/styles/editar-product.css";
import Helmet from "../components/Helmet/Helmet";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";

const EditarProduct = () => {
  //const navigate = useNavigate();
  const { id } = useParams();

  //Hooks
  const [idProducto, setIdProducto] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState(0);
  const [inventario, setInventario] = useState(0);
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
    setImagen(file.secure_url);
    setLoading(false);
  };


  useEffect(() => {
    const recuperarProducto = () => {
      let producto = JSON.parse(localStorage.getItem("productoAEditar"));
      setIdProducto(producto._id);
    };
    recuperarProducto();
    //console.log('ver id producto:',id)

    axios
      .get("/api/producto/" + id)

      .then((res) => {
        //console.log('mensaje del data',res);
        const dataproductos = res.data.product;
        setNombre(dataproductos.nombre);
        setDescripcion(dataproductos.descripcion);
        setCategoria(dataproductos.categoria);
        setPrecio(dataproductos.precio);
        setInventario(dataproductos.inventario);
        setImagen(dataproductos.imagen);
      });
  }, []);

  //Función que actualiza
  function editarProducto() {
    //Nuevo objeto para actualizar el usuario
    const actualizarproducto = {
      nombre: nombre,
      descripcion: descripcion,
      categoria: categoria,
      precio: precio,
      inventario: inventario,
      imagen: imagen,
    };

    //Hacer la petición usando axios
    axios
      .put("/api/producto/" + id, actualizarproducto)
      .then((res) => {
        //console.log("info res.data", res.data);
        Swal.fire("Producto modificado..✔");
        <Navigate to="/ProductAd" />;
      })
      .then((err) => {
        console.log(err);
      });
  }

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
                <Link to="/clientes">
                  <li className="sidebarListItem active">
                    <FontAwesomeIcon icon={faUsers} className="sidebarIcon" />
                    Clientes
                  </li>
                </Link>

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
          </div>

          <div className="userUpdate">
            <form className="userUpdateForm" onSubmit={editarProducto}>
              <div className="userUpdateLeft">
                {/* <div className="userUpdateItem">
                  <label>Referencia</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div> */}
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
                  Actualizar
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
                      src={imagen}
                      alt="imagen-producto"
                    />
                  )}
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
