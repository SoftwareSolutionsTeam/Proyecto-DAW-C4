import React, { useState, useEffect } from "react";
import "../assets/styles/ventas.css";
import Helmet from "../components/Helmet/Helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Ventas = () => {
  // const rows = [
  //   {
  //     id: "dh344ksr456hs7",
  //     nombre: "Audifonos Inalambricos",
  //     cantidad: "1",
  //     fechaPago: "2022-01-03",
  //     cliente: "cliente01@gmail.com",
  //     precioTotal: "599",
  //     estado: "entregado",
  //   },
  // ];

  const [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    fetch("https://tecnostore.herokuapp.com/api/admin/orders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrdenes(data.orders);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const rows = [
  //   {
  //     id: "01jdki34784",
  //     // img: img01,
  //     ref: "jhd456",
  //     nombre: "Audifonos Inalambricos",
  //     fecha: "2022-01-03",
  //     cliente: "cliente01@gmail.com",
  //     precio: "599",
  //     status: "entregado",
  //   },
  //   {
  //     id: "qswe3402",
  //     // img: img02,
  //     ref: "jhd456",
  //     nombre: "Audifonos Inalambricos",
  //     fecha: "2021-09-23",
  //     cliente: "cliente02@gmail.com",
  //     precio: "599",
  //     status: "en camino",
  //   },
  //   {
  //     id: "0sedr435tg3",
  //     // img: img03,
  //     ref: "dib397",
  //     nombre: "Diadema Inalambrica",
  //     fecha: "2020-11-03",
  //     cliente: "cliente03@gmail.com",
  //     precio: "300",
  //     status: "pendiente",
  //   },
  //   {
  //     id: "0cd23jjkl4",
  //     // img: img04,
  //     ref: "dao999",
  //     nombre: "Computador all-one",
  //     fecha: "2019-10-08",
  //     cliente: "cliente04@gmail.com",
  //     precio: "1000",
  //     status: "entregado",
  //   },
  // ];

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

        <section>
          <TableContainer component={Paper} className="table">
            <h3>Ordenes de ventas</h3>

            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className=""
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Id orden</TableCell>
                  <TableCell className="tableCell">Producto</TableCell>
                  <TableCell className="tableCell">Cantidad</TableCell>
                  <TableCell className="tableCell">Fecha</TableCell>
                  <TableCell className="tableCell">Total venta</TableCell>
                  <TableCell className="tableCell">Status orden</TableCell>
                  <TableCell className="tableCell">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ordenes.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row._id}</TableCell>
                    {row.items.map((producto) => (
                      <div>
                        <TableCell className="tableCell">
                          {producto.nombre}
                        </TableCell>
                        <TableCell className="tableCell">
                          {producto.cantidad}
                        </TableCell>                         
                      </div>
                    ))}
  
                    <TableCell className="tableCell">{row.cantidad}</TableCell>
                    <TableCell className="tableCell">{row.fechaPago}</TableCell>
                    <TableCell className="tableCell">
                      {row.precioTotal}
                    </TableCell>
                    <TableCell className="tableCell">{row.estado}</TableCell>

                    <TableCell className="tableCell">
                      <Link to={""}>
                        <button className="btn__productListEdit">
                          Ver detalles
                        </button>
                      </Link>
                      {/* <button
                      className="btn__productListElim"
                      onClick=""
                    >
                      Eliminar
                    </button> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </div>
    </Helmet>
  );
};
export default Ventas;
