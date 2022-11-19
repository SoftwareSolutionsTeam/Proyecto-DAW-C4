import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup.jsx"
import Admin from "../pages/HomeAd";
import ProductAd from "../pages/ProductAd";
import Ventas from "../pages/Ventas";
import Inventario from "../pages/Inventario";
import EditarProduct from "../pages/EditarProduct";
import CrearProduct from "../pages/CrearProduct";
import Clientes from "../pages/Clientes";

import ProtectedRoute from "./ProtectedRoute";
import store from "../store";
import { loadUser } from "../actions/userActions";

const Router = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])


  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="admin" element={<Admin />} />
      <Route path="productAd" element={<ProductAd />} />
      <Route path="ventas" element={<Ventas />} />
      <Route path="inventario" element={<Inventario />} />
      <Route path="crearProduct" element={<CrearProduct />} />
      <Route path="editarProduct/:id" element={<EditarProduct />} />
      <Route path="clientes" element={<Clientes />} />
      {/* <Route path="checkout" element={<Checkout />} /> */}

      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="registro" element={<Signup />} />
    </Routes>
  );
};

export default Router;
