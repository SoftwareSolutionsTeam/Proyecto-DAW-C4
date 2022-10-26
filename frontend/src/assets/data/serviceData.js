import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faArrowsRotate, faShieldHalved, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";

const serviceData = [
    {
      icon: <FontAwesomeIcon icon={faTruckFast} />,
      title: "Domicilio nacional",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowsRotate} />,
      title: "Devoluciones",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldHalved} />,
      title: "Pago seguro online",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
      title: " Garantía",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ];
  
  export default serviceData;
  