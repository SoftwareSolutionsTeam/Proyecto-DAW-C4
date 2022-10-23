import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/dia-in01.jpg";
import "../assets/styles/home.css";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";


const Home = () => {

  const [trendingProducts,setTrendingProducts] = useState([])
  const [bestSalesProducts,setBestSalesProducts] = useState([])

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item => item.category === 'computadores');
    const filteredBestSalesProducts = products.filter(item => item.category === 'dispositivos');


    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
  },[]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  Tendencias en Auriculares para el {year}
                </p>
                <h3>Wireless</h3>
                <h2>HEADPHONES</h2>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Ver detalles</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="imagen-audifono" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12'className="text__center">
              <h2 className="section__title">Tendencias</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
      <Container>
          <Row>
            <Col lg='12'className="text__center">
              <h2 className="section__title">Más vendidos</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>     
    </Helmet>
  );
};
export default Home;
