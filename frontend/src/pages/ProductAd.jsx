import React, { useState } from "react";

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
import img11 from "../assets/images/imp-ep-ecotank-l64.jpg";
import img12 from "../assets/images/lenovo-monitor-ideacentre-aio.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
  faPlus,
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
      descripcion: "Los audifonos te proporcionan la última tecnología Bluetooth para que evites los molestos cables conectados a tus dispositivos, son excelente opción para deportistas o para llevarlos en viajes, emparejamiento fácil y rápido con teléfonos inteligentes, tabletas y otros dispositivos de música con Bluetooth. Compatible con iPod, iPhone, iPad, dispositivo Android, dispositivos Bluetooth, computadora portátil, tableta, llamadas manos libres para PC- diseño moderno duradero.",
      precio: "599",
      stock: "48",
    },
    {
      id: "02",
      img: img02,
      ref: "ctm456",
      nombre: "Combo teclado y mouse",
      categoria: "Computadores",
      descripcion: "El más reciente conjunto de teclado y mouse con cable para escritorio, el combo teclado y mouse alámbrico Genius KM-160, tiene un elegante diseño negro, y es ideal para Windows 7. Su estructura de teclado silencioso permite una excelente experiencia de escritura (igual a un notebook), además de un bajo nivel de ruido mientras escribe.",
      precio: "800",
      stock: "30",
    },
    {
      id: "03",
      img: img03,
      ref: "dib397",
      nombre: "Diadema Inalambrica",
      categoria: "dispositivos",
      descripcion: "Disfruta de una experiencia de audio más envolvente y llamadas más claras, incluso en entornos ruidosos. Sonido excelente con conexión Bluetooth que te libera de los cables y te ofrece una opción ultraportátil. Ahora, con hasta 20 horas de duración de la batería, puedes pasar tu día más ocupado. Descansa tranquilo con una garantía limitada estándar de un año de HP. Tu compañero perfecto para cualquier entrenamiento, gracias a su diseño resistente, el sudor no puede detenerte.",
      precio: "300",
      stock: "100",
    },
    {
      id: "04",
      img: img04,
      ref: "dao999",
      nombre: "Computador all-one Lenovo",
      categoria: "Computadores",
      descripcion: "DescripciónLa AIO 330 está diseñada para funcionar a pleno rendimiento. Sácala de la caja, enchúfala y listo. Como todo en uno, no hay torres separadas o cables sucios con los que lidiar. Además, esta PC que ahorra espacio viene, incluso, con su propio teclado y mouse.",
      precio: "1000",
      stock: "20",
    },
    {
      id: "05",
      img: img05,
      ref: "cto777",
      nombre: "Computador all-one HP",
      categoria: "Computadores",
      descripcion: "El equipo HP Pavilion All-in-One es simplemente todo lo que necesitas. Una desktop diseñada para mantener la productividad durante la transmisión o mientras juegas, con una pantalla sin parpadeo[1] que ofrece increíble experiencia de audio. El filtro que disminuye la luz azul mantiene tus ojos cómodos. Y no olvides lo bien que te sentirás con tu elección al contar con un diseño sustentable que amarás tanto como al planeta.",
      precio: "1100",
      stock: "22",
    },
    {
      id: "06",
      img: img06,
      ref: "jhd456",
      nombre: "Impresora",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "07",
      img: img07,
      ref: "jhd456",
      nombre: "Reloj digital",
      categoria: "dispositivos",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      precio: "599",
      stock: "48",
    },
    {
      id: "08",
      img: img08,
      ref: "jhd460",
      nombre: "Lapto lenovo smart",
      categoria: "dispositivos",
      descripcion: "Portatil Lenovo 3-15iml05 Core i3 8GB Ssd 256GB 15.6 Hd",
      precio: "2.400.000",
      stock: "48",
    },
    {
      id: "09",
      img: img09,
      ref: "jhd461",
      nombre: "Smart Watch",
      categoria: "dispositivos",
      descripcion: "Reloj Inteligente Smartwatch Bluetooth Sensor Pulso Cardiaco",
      precio: "400.000",
      stock: "48",
    },
    {
      id: "10",
      img: img10,
      ref: "jhd462",
      nombre: "Lenovo Reloj Inteligente",
      categoria: "dispositivos",
      descripcion: "Toumi Fit 2 watch Reloj inteligente",
      precio: "1.300.000",
      stock: "20",
    },
    {
      id: "11",
      img: img11,
      ref: "jhd463",
      nombre: "Epson Workforce Pro Wf4730 + Ecotanque Bigcolors",
      categoria: "dispositivos",
      descripcion: "EPSON EC4030 = EPSON WORKFORCE PRO WF4730 + ECOTANQUE Impresora / Copia / Fax / Scanner / ADF /mpresión Duplex/ Ethernet/ Wi-fi / Web y Móvil Print",
      precio: "2.030.000",
      stock: "48",
    },
    {
      id: "12",
      img: img12,
      ref: "hga23",
      nombre: "IdeaCentre AIO 3 6ta Gen (23.8', AMD)'",
      categoria: "dispositivos",
      descripcion: "'IdeaCentre 3 23.8' AIO 6ta Gen - White Modelo:  F0G100J7LD",
      precio: "3.000.000",
      stock: "5",
    },
  ];

  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
          <Link to="/crearProduct" className="btn__crear">
            <span className="" >
              <button className="btn__crear">
                <FontAwesomeIcon icon={faPlus} className="icon__bt"/>
                  Nuevo
              </button>
            </span>
          </Link>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className="">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell">Nombre</TableCell>
                <TableCell className="tableCell">Referencia</TableCell>
                <TableCell className="tableCell">Categoria</TableCell>
                <TableCell className="tableCell">Descripcion</TableCell>
                <TableCell className="tableCell">Precio</TableCell>
                <TableCell className="tableCell">Stock</TableCell>
                <TableCell className="tableCell">Acciones</TableCell>
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
                  <TableCell className="tableCell">{row.categoria}</TableCell>
                  <TableCell className="tableCell">{row.descripcion}</TableCell>
                  <TableCell className="tableCell">{row.precio}</TableCell>
                  <TableCell className="tableCell">{row.stock}</TableCell>
                  <TableCell className="tableCell">
                    <Link to={"/editarProduct/" + row.id}>
                      <button className="btn__productListEdit">Editar</button>
                    </Link>
                    <button
                      className="btn__productListElim"
                      onClick={() => handleDelete(row.id)}
                    >
                      Eliminar
                    </button>
                  </TableCell>
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