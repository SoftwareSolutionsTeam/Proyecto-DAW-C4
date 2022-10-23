import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../assets/styles/productAd.css";
import Helmet from "../components/Helmet/Helmet";
//import products from "../assets/data/products";
import img01 from "../assets/images/au-in.jpg";
import img02 from "../assets/images/cmb-t-m.jpg";
import img03 from "../assets/images/dia-in01.jpg";
import img04 from "../assets/images/es-hp09LA.webp";
import img05 from "../assets/images/es-hp03.webp";
import img06 from "../assets/images/iMac-Pro.webp";
import img07 from "../assets/images/imp-ep-01.png";
import img08 from "../assets/images/por-as05.png";
import img09 from "../assets/images/smart-watch01.jpg";
import img10 from "../assets/images/reloj-dep.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const ProductAd = () => {
  const rows = [
    {
      id: "01",
      img: img01,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "02",
      img: img02,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "03",
      img: img03,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "04",
      img: img04,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "05",
      img: img05,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "06",
      img: img06,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "07",
      img: img07,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "08",
      img: img08,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "09",
      img: img09,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "10",
      img: img10,
      ref: "jhd456",
      nombre: "Audifonos Inalambricos",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
  ];

  return (
    <Helmet title={"Lista de productos"}>
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

      
         
          <TableContainer component={Paper} className="table">
            <h3>Lista general de productos</h3>
            <button className="btn__crear"><FontAwesomeIcon icon={faPlus} /> Crear</button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="" >
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Id</TableCell>
                  <TableCell className="tableCell">Nombre</TableCell>
                  <TableCell className="tableCell">Referencia</TableCell>
                  <TableCell className="tableCell">Categoria</TableCell>
                  <TableCell className="tableCell">Descripcion</TableCell>
                  <TableCell className="tableCell">Precio</TableCell>
                  <TableCell className="tableCell">Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                        {row.ProductAd}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.ref}</TableCell>
                    <TableCell className="tableCell">{row.categoria}</TableCell>
                    <TableCell className="tableCell">
                      {row.descripcion}
                    </TableCell>
                    <TableCell className="tableCell">{row.precio}</TableCell>
                    <TableCell className="tableCell">{row.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        

      </div>
    </Helmet>
  );
};

export default ProductAd;
