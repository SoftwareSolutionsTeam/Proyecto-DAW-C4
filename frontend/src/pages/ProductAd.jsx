import React, { useState, useEffect } from 'react';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

import "../assets/styles/productAd.css";
import Helmet from "../components/Helmet/Helmet";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStore,
  faCreditCardAlt,
  faWarehouse,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

const ProductAd = () => {

  const navegar = useNavigate();

  const [products, setProducts] = useState([]);
   useEffect(() => {
    fetch('http://localhost:5001/api/productos')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setProducts(data.productos);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   const handleGuardarIdEditar = (row) => {
    console.log('row', row)
     localStorage.setItem("productoAEditar", JSON.stringify(row))
   }


  const rows = [
  //   {
  //     id: "01",
  //     // img: img01,
  //     ref: "jhd456",
  //     nombre: "Audifonos Inalambricos",
  //     categoria: "dispositivos",
  //     descripcion: "Los audifonos te proporcionan la última tecnología Bluetooth para que evites los molestos cables conectados a tus dispositivos.",
  //     precio: "599",
  //     stock: "48",
  //   },
  //   {
  //     id: "02",
  //     // img: img02,
  //     ref: "ctm456",
  //     nombre: "Combo teclado y mouse",
  //     categoria: "Computadores",
  //     descripcion: "El más reciente conjunto de teclado y mouse con cable para escritorio, el combo teclado y mouse alámbrico Genius KM-160",
  //     precio: "800",
  //     stock: "30",
  //   },
  //   {
  //     id: "03",
  //     // img: img03,
  //     ref: "dib397",
  //     nombre: "Diadema Inalambrica",
  //     categoria: "dispositivos",
  //     descripcion: "Disfruta de una experiencia de audio más envolvente y llamadas más claras, incluso en entornos ruidosos. ",
  //     precio: "300",
  //     stock: "100",
  //   },
  //   {
  //     id: "04",
  //     // img: img04,
  //     ref: "dao999",
  //     nombre: "Computador all-one Lenovo",
  //     categoria: "Computadores",
  //     descripcion: "DescripciónLa AIO 330 está diseñada para funcionar a pleno rendimiento. Sácala de la caja, enchúfala y listo.",
  //     precio: "1000",
  //     stock: "20",
  //   },
  //   {
  //     id: "05",
  //     // img: img05,
  //     ref: "cto777",
  //     nombre: "Computador all-one HP",
  //     categoria: "Computadores",
  //     descripcion: "El equipo HP Pavilion All-in-One es simplemente todo lo que necesitas.",
  //     precio: "1100",
  //     stock: "22",
  //   },
  //   {
  //     id: "06",
  //     // img: img06,
  //     ref: "jhd456",
  //     nombre: "Impresora",
  //     categoria: "dispositivos",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     precio: "599",
  //     stock: "48",
  //   },
  //   {
  //     id: "07",
  //     // img: img07,
  //     ref: "jhd459",
  //     nombre: "Reloj digital",
  //     categoria: "dispositivos",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     precio: "599",
  //     stock: "48",
  //   },
  //   {
  //     id: "08",
  //     // img: img08,
  //     ref: "jhd460",
  //     nombre: "Lapto lenovo smart",
  //     categoria: "dispositivos",
  //     descripcion: "Portatil Lenovo 3-15iml05 Core i3 8GB Ssd 256GB 15.6 Hd",
  //     precio: "2.400.000",
  //     stock: "48",
  //   },
  //   {
  //     id: "09",
  //     // img: img09,
  //     ref: "jhd461",
  //     nombre: "Smart Watch",
  //     categoria: "dispositivos",
  //     descripcion: "Reloj Inteligente Smartwatch Bluetooth Sensor Pulso Cardiaco",
  //     precio: "400.000",
  //     stock: "48",
  //   },
  //   {
  //     id: "10",
  //     // img: img10,
  //     ref: "jhd462",
  //     nombre: "Lenovo Reloj Inteligente",
  //     categoria: "dispositivos",
  //     descripcion: "Toumi Fit 2 watch Reloj inteligente",
  //     precio: "1.300.000",
  //     stock: "20",
  //   },
  //   {
  //     id: "11",
  //     // img: img11,
  //     ref: "jhd463",
  //     nombre: "Epson Workforce Pro Wf4730 + Ecotanque Bigcolors",
  //     categoria: "dispositivos",
  //     descripcion: "EPSON EC4030 = EPSON WORKFORCE PRO WF4730 + ECOTANQUE Impresora / Copia / Fax / Scanner / ADF /mpresión Duplex/ Ethernet/ Wi-fi / Web y Móvil Print",
  //     precio: "2.030.000",
  //     stock: "48",
  //   },
  //   {
  //     id: "12",
  //     // img: img12,
  //     ref: "jhd456",
  //     nombre: "IdeaCentre AIO 3 6ta Gen (23.8', AMD)'",
  //     categoria: "dispositivos",
  //     descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     precio: "3.000.000",
  //     stock: "5",
  //   },
   ];

   //Función para borrar usuario
   function borrarproducto(id){
    axios.delete('/producto/' + id).then(res => {
        //console.log(res.data) 
        //alert(res.data)  
        Swal.fire("Producto eliminado..☠");
        //navegar(0)
    }).catch(err => {
        console.log(err)
    })
}


  // const [data, setData] = useState(products);
  // const handleDelete = (_id) => {
  //   setData(data.filter((item) => item._id !== _id));
  // };

  
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className="dm__table">
            <TableHead>
              <TableRow>
                {/* <TableCell className="tableCell">Id</TableCell> */}
                <TableCell className="tableCell">Nombre</TableCell>
                <TableCell className="tableCell">Categoria</TableCell>
                <TableCell className="tableCell">Descripcion</TableCell>
                <TableCell className="tableCell">Precio</TableCell>
                <TableCell className="tableCell">Stock</TableCell>
                <TableCell className="tableCell">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow key={row._id}>
                  {/* <TableCell className="tableCell">{row.id}</TableCell> */}
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.imagen} alt="" className="image" />
                      {row.nombre}
                    </div>
                  </TableCell>
                  {/* <TableCell className="tableCell">{row.ref}</TableCell> */}
                  <TableCell className="tableCell">{row.categoria}</TableCell>
                  <TableCell className="tableCell">{row.descripcion}</TableCell>
                  <TableCell className="tableCell">{row.precio}</TableCell>
                  <TableCell className="tableCell">{row.inventario}</TableCell>
                  <TableCell className="tableCell">

                    <Link to={"/editarProduct/" + row.id}>
                      <button onClick={() => handleGuardarIdEditar(row)} className="btn__productListEdit">Editar</button>
                    </Link>

                    <button
                      className="btn__productListElim"
                      // onClick={() => handleDelete(row._id)}
                      onClick={()=>{borrarproducto(row.id)}}
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