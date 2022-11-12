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

const Clientes = () => {
//   const rows = [
//     {
//       nombre: "Michaela Jodona",
//       email: "micha01@gmail.com",
//       password: "dh344ksr456hsfrg56nhjkl09i7",
//       role: "user",
//       fechaRegistro: "2022-01-03",
//     },
//   ];

  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/admin/allUsers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsuarios(data.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Helmet title={"Lista de usuarios"}>
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
            <h3>Usuarios registrados</h3>

            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className=""
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Nombre</TableCell>
                  <TableCell className="tableCell">Correo</TableCell>
                  <TableCell className="tableCell">Contraseña</TableCell>
                  <TableCell className="tableCell">Rol</TableCell>
                  <TableCell className="tableCell">Fecha registro</TableCell>
                  <TableCell className="tableCell">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usuarios.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.nombre}</TableCell>
                    <TableCell className="tableCell">{row.email}</TableCell>
                    <TableCell className="tableCell">{row.password}</TableCell>
                    <TableCell className="tableCell">{row.role}</TableCell>
                    <TableCell className="tableCell">{row.fechaRegistro}</TableCell>

                    <TableCell className="tableCell">
                      <Link to={""}>
                        <button className="btn__productListEdit">Editar</button>
                      </Link>
                      <button className="btn__productListElim" onClick="">
                        Eliminar
                      </button>
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

export default Clientes;
