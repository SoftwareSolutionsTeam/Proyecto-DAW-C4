import React, { useState } from "react";
import "../assets/styles/ventas.css";
import Helmet from "../components/Helmet/Helmet";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import img01 from "../assets/images/au-in.jpg";
import img02 from "../assets/images/cmb-t-m.jpg";
import img03 from "../assets/images/dia-in01.jpg";
import img04 from "../assets/images/es-hp09LA.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Ventas = () => {
  //const cartItems = useSelector((state) => state.cart.cartItems);
  const rows = [
    {
      id: "01jdki34784",
      img: img01,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      fecha: "2022-01-03",
      cliente: "cliente01@gmail.com",
      precio: "599",
      status: "entregado",
    },
    {
      id: "qswe3402",
      img: img02,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      fecha: "2021-09-23",
      cliente: "cliente02@gmail.com",
      precio: "599",
      status: "en camino",
    },
    {
      id: "0sedr435tg3",
      img: img03,
      ref: "dib397",
      nombre: "Diadema Inalambrica",
      fecha: "2020-11-03",
      cliente: "cliente03@gmail.com",
      precio: "300",
      status: "pendiente",
    },
    {
      id: "0cd23jjkl4",
      img: img04,
      ref: "dao999",
      nombre: "Computador all-one",
      fecha: "2019-10-08",
      cliente: "cliente04@gmail.com",
      precio: "1000",
      status: "entregado",
    },
  ];

  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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

        <section>
          <TableContainer component={Paper} className="table">
            <h3>Ordenes de ventas</h3>
            {/* <button className="btn__crear">
            <FontAwesomeIcon icon={faPlus} /> Crear
          </button> */}
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className=""
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Id orden</TableCell>
                  <TableCell className="tableCell">Producto</TableCell>
                  <TableCell className="tableCell">Referencia</TableCell>
                  <TableCell className="tableCell">Fecha</TableCell>
                  <TableCell className="tableCell">Cliente</TableCell>
                  <TableCell className="tableCell">Total venta</TableCell>
                  <TableCell className="tableCell">Status orden</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.nombre}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.ref}</TableCell>
                    <TableCell className="tableCell">{row.fecha}</TableCell>
                    <TableCell className="tableCell">{row.cliente}</TableCell>
                    <TableCell className="tableCell">{row.precio}</TableCell>
                    <TableCell className="tableCell__status">{row.status}</TableCell>

                    {/* <TableCell className="tableCell">
                    <Link to={"/editarProduct/" + row.id}>
                      <button className="btn__productListEdit">Editar</button>
                    </Link>
                    <button
                      className="btn__productListElim"
                      onClick={() => handleDelete(row.id)}
                    >
                      Eliminar
                    </button>
                  </TableCell> */}
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
