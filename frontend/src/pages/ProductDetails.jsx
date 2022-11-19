import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
// import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
//import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import "../assets/styles/product-details.css";
import { motion } from "framer-motion";
// import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {

  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  // const product = products.find((item) => item.id === id);

  const [prod, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://tecnostore.herokuapp.com/api/producto/'+id)
         .then((response) => response.json())
         .then((data) => {
           setProducts(data.product);
           console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   const {
    imagen,
    nombre,
    precio,
    descripcion,
    categoria,
  } = prod;


  // const {
  //   imgUrl,
  //   productName,
  //   price,
  //   avgRating,
  //   reviews,
  //   description,
  //   shortDesc,
  //   category,
  // } = product;

  // const relatedProducts = products.filter((item) => item.category === category);

  const submitHanler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj)
    toast.success('Comentario enviado..✔')
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imagen,
        nombre,
        precio,
      })
    );

    toast.success("Producto añadido a la bolsa");
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  return (
    <Helmet title={nombre}>
      <CommonSection title={nombre} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imagen} alt="" />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{nombre}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStarHalf} />
                    </span>
                  </div>

                  <p>
                    {/* (<span>{avgRating}</span> Ratings) */}
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${precio} </span>
                  <span>Categoría: {categoria} </span>
                  {/* <span>Categoría: {category.toUpperCase()}</span> */}
                </div>
                <p className="mt-3">{descripcion}</p>

                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Añadir a la bolsa
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h5
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  {/* Descripción */}
                </h5>
                <h5
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  {/* Reviews ({reviews.length}) */}
                </h5>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-4">
                  {/* <p>{description}</p> */}
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    {/* <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Mom0 Shin</h6>
                          <span>{item.rating} (calificación)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul> */}

                    <div className="review__form">
                      {/* <h4>Deja tu comentario...</h4> */}
                      <form action="" onSubmit={submitHanler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Ingrese su nombre"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<FontAwesomeIcon icon={faStar} />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<FontAwesomeIcon icon={faStar} />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<FontAwesomeIcon icon={faStar} />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<FontAwesomeIcon icon={faStar} />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<FontAwesomeIcon icon={faStar} />
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="review mensaje..."
                            required
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn mt-2"
                        >
                          Enviar
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            {/* <Col lg="12" className="mt-5">
              <h2 className="related__title">También te puede interesar</h2>
            </Col> */}

            {/* <ProductsList data={relatedProducts} /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
