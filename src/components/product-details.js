import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instruction } from "./code";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import sweet from "../images/sweet/sweet-8.jpg";
import "../css/product-details.css";
function ProductDetails() {
  const [x, setX] = useState(1);

  const Plus = () => {
    setX(x + 1);
  };
  const Minus = () => {
    if (x <= 1) {
      return;
    } else {
      setX(x - 1);
    }
  };

  return (
    <div className="product-details min-vh-100">
      <img src={sweet} alt="bread-img" className="w-100" />
      <p className="text-capitalize bg-white p-3">
        {" "}
        <p>
          <b>Keto Almond Toast</b>
        </p>
        <p className="text-capitalize">
          Keto Toast, approx.total wheight 400 gms- made of coconut and cheese
          (Nutrients per piece: Carb: 1g, Fat: 16g, Protein:7g, Kcal:178)
        </p>
      </p>
      <div className="row p-3 bg-white">
        <div className="col text-start">price</div>
        <div className="col text-end">KWD 3.75</div>
      </div>
      <Instruction />
      <div className="pieces text-center fs-4 text-warning bg-white p-2">
        <span className="me-3" role="button" onClick={Minus}>
          <FiMinusCircle />
        </span>

        <span className="text-dark">{x}</span>
        <span className="ms-3" role="button" onClick={Plus}>
          <BsPlusCircle />
        </span>
      </div>
      <Link
        to="/"
        className="text-uppercase border-1 border-dark btn p-show p-2 w-100"
      >
        add to order . KWD 3.750
      </Link>
    </div>
  );
}

export default ProductDetails;
